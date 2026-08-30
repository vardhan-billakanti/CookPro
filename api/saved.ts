import type { IncomingMessage, ServerResponse } from 'http';
import { getSavedRecipesCollection, getRecipesCollection } from './_db';
import { RECIPES_DATA } from '../src/data/recipes';

const fallbackSavedMap = new Map<string, Set<string>>();

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const url = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
  const userId = url.searchParams.get('userId') || 'guest';

  try {
    const savedCol = await getSavedRecipesCollection();
    const recipeCol = await getRecipesCollection();

    if (req.method === 'GET') {
      const savedDocs = await savedCol.find({ userId }).sort({ createdAt: -1 }).toArray();
      const savedRecipeIds = savedDocs.map((d: any) => d.recipeId);

      const recipes = await recipeCol
        .find({
          $or: [{ id: { $in: savedRecipeIds } }, { externalId: { $in: savedRecipeIds } }],
        })
        .toArray();

      const missingIds = savedRecipeIds.filter(id => !recipes.some((r: any) => r.id === id || r.externalId === id));
      for (const mId of missingIds) {
        const local = RECIPES_DATA.find(r => r.id === mId || r.slug === mId);
        if (local) recipes.push(local as any);
      }

      res.statusCode = 200;
      res.end(
        JSON.stringify({
          userId,
          savedRecipeIds,
          savedRecipes: recipes,
          count: savedRecipeIds.length,
        })
      );
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const recipeId = data.recipeId;

      if (!recipeId) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing recipeId' }));
        return;
      }

      const existing = await savedCol.findOne({ userId: targetUserId, recipeId });
      if (existing) {
        await savedCol.deleteOne({ _id: existing._id });
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, saved: false, recipeId }));
        return;
      } else {
        await savedCol.insertOne({
          userId: targetUserId,
          recipeId,
          createdAt: new Date(),
        });
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, saved: true, recipeId }));
        return;
      }
    }

    if (req.method === 'DELETE') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const recipeId = data.recipeId;

      if (!recipeId) {
        await savedCol.deleteMany({ userId: targetUserId });
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: 'All saved recipes cleared' }));
        return;
      }

      await savedCol.deleteOne({ userId: targetUserId, recipeId });
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, removed: recipeId }));
      return;
    }

    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  } catch (err: any) {
    // Offline in-memory fallback
    if (!fallbackSavedMap.has(userId)) {
      fallbackSavedMap.set(userId, new Set(['classic-egg-fried-rice', 'creamy-tomato-pasta']));
    }
    const set = fallbackSavedMap.get(userId)!;

    if (req.method === 'GET') {
      const savedRecipeIds = Array.from(set);
      const savedRecipes = savedRecipeIds
        .map(id => RECIPES_DATA.find(r => r.id === id || r.slug === id))
        .filter(Boolean);
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          userId,
          savedRecipeIds,
          savedRecipes,
          count: savedRecipeIds.length,
          offline: true,
        })
      );
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      const recipeId = data.recipeId;
      if (!recipeId) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing recipeId' }));
        return;
      }
      let saved = false;
      if (set.has(recipeId)) {
        set.delete(recipeId);
        saved = false;
      } else {
        set.add(recipeId);
        saved = true;
      }
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, saved, recipeId, offline: true }));
      return;
    }

    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message || 'Cookbook error' }));
  }
}
