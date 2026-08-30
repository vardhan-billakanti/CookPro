import type { IncomingMessage, ServerResponse } from 'http';
import { getRecipesCollection } from './_db';
import { RECIPES_DATA } from '../src/data/recipes';

// Helper to parse JSON body
function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const url = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
  const id = url.searchParams.get('id');
  const q = url.searchParams.get('q')?.trim().toLowerCase();
  const cuisine = url.searchParams.get('cuisine');
  const mealType = url.searchParams.get('mealType');
  const dietary = url.searchParams.get('dietary');
  const limit = parseInt(url.searchParams.get('limit') || '100', 10);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);

  try {
    const col = await getRecipesCollection();

    if (req.method === 'GET') {
      if (id) {
        // Fetch single recipe by ID or externalId
        const recipe = await col.findOne({
          $or: [{ id }, { externalId: id }, { slug: id }],
        });

        if (recipe) {
          res.statusCode = 200;
          res.end(JSON.stringify(recipe));
          return;
        }

        // Fallback to local catalog if not found in DB
        const local = RECIPES_DATA.find(r => r.id === id || r.slug === id);
        if (local) {
          res.statusCode = 200;
          res.end(JSON.stringify(local));
          return;
        }

        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Recipe not found' }));
        return;
      }

      // Build MongoDB Query
      const query: any = {};

      if (q) {
        query.$or = [
          { title: { $regex: q, $options: 'i' } },
          { cuisine: { $regex: q, $options: 'i' } },
          { tags: { $regex: q, $options: 'i' } },
          { 'ingredients.name': { $regex: q, $options: 'i' } },
          { 'ingredients.normalizedName': { $regex: q, $options: 'i' } },
        ];
      }

      if (cuisine) {
        query.cuisine = { $regex: `^${cuisine}$`, $options: 'i' };
      }

      if (mealType) {
        query.mealType = { $regex: `^${mealType}$`, $options: 'i' };
      }

      if (dietary) {
        query.dietary = { $in: [dietary] };
      }

      const [recipes, total] = await Promise.all([
        col.find(query).skip(skip).limit(limit).toArray(),
        col.countDocuments(query),
      ]);

      // If DB has 0 items (e.g. initial setup before migrate), fallback to local catalog
      if (recipes.length === 0 && !q && !cuisine && !mealType && !dietary) {
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            recipes: RECIPES_DATA,
            total: RECIPES_DATA.length,
            source: 'local_fallback',
          })
        );
        return;
      }

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          recipes,
          total,
          source: 'mongodb_atlas',
        })
      );
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      if (!data.title || !data.ingredients) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing required fields: title, ingredients' }));
        return;
      }

      const externalId = data.externalId || data.id || `custom-${Date.now()}`;
      const result = await col.updateOne(
        { externalId },
        { $set: { ...data, externalId, updatedAt: new Date() } },
        { upsert: true }
      );

      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, externalId, result }));
      return;
    }

    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  } catch (err: any) {
    // Graceful offline fallback to local catalog
    if (req.method === 'GET') {
      let filtered = RECIPES_DATA;
      if (q) {
        filtered = filtered.filter(
          r =>
            r.title.toLowerCase().includes(q) ||
            r.cuisine.toLowerCase().includes(q) ||
            r.tags.some(t => t.toLowerCase().includes(q)) ||
            r.ingredients.some(i => i.name.toLowerCase().includes(q))
        );
      }
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          recipes: filtered,
          total: filtered.length,
          source: 'local_offline',
          dbError: err.message,
        })
      );
      return;
    }

    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message || 'Database error' }));
  }
}
