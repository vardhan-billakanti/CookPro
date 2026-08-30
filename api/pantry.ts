import type { IncomingMessage, ServerResponse } from 'http';
import { getPantryCollection } from './_db';
import { normalizeIngredient } from '../src/utils/matchingEngine';

const fallbackPantryMap = new Map<string, any[]>();

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
    const col = await getPantryCollection();

    if (req.method === 'GET') {
      const items = await col.find({ userId }).sort({ createdAt: -1 }).toArray();
      res.statusCode = 200;
      res.end(JSON.stringify({ userId, items, count: items.length }));
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const name = data.name?.trim();

      if (!name) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing ingredient name' }));
        return;
      }

      const normalizedName = normalizeIngredient(name);
      const doc = {
        id: data.id || `pantry-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        userId: targetUserId,
        name,
        normalizedName,
        category: data.category || 'Other',
        quantity: data.quantity || '',
        createdAt: new Date(),
      };

      await col.updateOne(
        { userId: targetUserId, normalizedName },
        { $set: doc },
        { upsert: true }
      );

      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, item: doc }));
      return;
    }

    if (req.method === 'DELETE') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const id = data.id;
      const name = data.name;

      if (!id && !name) {
        // Clear all items for user
        await col.deleteMany({ userId: targetUserId });
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: 'Pantry cleared' }));
        return;
      }

      const query: any = { userId: targetUserId };
      if (id) query.id = id;
      if (name) query.normalizedName = normalizeIngredient(name);

      const result = await col.deleteOne(query);
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, deletedCount: result.deletedCount }));
      return;
    }

    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  } catch (err: any) {
    // Offline in-memory fallback
    if (req.method === 'GET') {
      const items = fallbackPantryMap.get(userId) || [];
      res.statusCode = 200;
      res.end(JSON.stringify({ userId, items, count: items.length, offline: true }));
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const current = fallbackPantryMap.get(targetUserId) || [];
      const item = {
        id: data.id || `pantry-${Date.now()}`,
        userId: targetUserId,
        name: data.name,
        category: data.category || 'Other',
        quantity: data.quantity || '',
        createdAt: new Date(),
      };
      fallbackPantryMap.set(targetUserId, [item, ...current.filter((i: any) => i.name !== data.name)]);
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, item, offline: true }));
      return;
    }

    if (req.method === 'DELETE') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      if (data.id) {
        const current = fallbackPantryMap.get(targetUserId) || [];
        fallbackPantryMap.set(targetUserId, current.filter((i: any) => i.id !== data.id));
      } else {
        fallbackPantryMap.delete(targetUserId);
      }
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, offline: true }));
      return;
    }

    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message || 'Pantry error' }));
  }
}
