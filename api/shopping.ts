import type { IncomingMessage, ServerResponse } from 'http';
import { getShoppingListCollection } from './_db';

const fallbackShoppingMap = new Map<string, any[]>();

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const url = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
  const userId = url.searchParams.get('userId') || 'guest';

  try {
    const col = await getShoppingListCollection();

    if (req.method === 'GET') {
      const items = await col.find({ userId }).sort({ createdAt: -1 }).toArray();
      res.statusCode = 200;
      res.end(JSON.stringify({ userId, items, count: items.length }));
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;

      if (Array.isArray(data.items)) {
        const docs = data.items.map((it: any) => ({
          id: it.id || `shop-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          userId: targetUserId,
          name: it.name,
          amount: it.amount || 1,
          unit: it.unit || '',
          completed: false,
          recipeSourceTitle: data.recipeSourceTitle || it.recipeSourceTitle || '',
          createdAt: new Date(),
        }));

        await col.insertMany(docs);
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, count: docs.length, items: docs }));
        return;
      }

      if (!data.name) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing item name' }));
        return;
      }

      const doc = {
        id: data.id || `shop-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        userId: targetUserId,
        name: data.name.trim(),
        amount: data.amount || 1,
        unit: data.unit || '',
        completed: false,
        recipeSourceTitle: data.recipeSourceTitle || '',
        createdAt: new Date(),
      };

      await col.insertOne(doc);
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, item: doc }));
      return;
    }

    if (req.method === 'PUT') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const id = data.id;

      if (!id) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing item id' }));
        return;
      }

      const item = await col.findOne({ userId: targetUserId, id });
      if (!item) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Item not found' }));
        return;
      }

      const newCompleted = data.completed !== undefined ? data.completed : !item.completed;
      await col.updateOne({ _id: item._id }, { $set: { completed: newCompleted } });

      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, id, completed: newCompleted }));
      return;
    }

    if (req.method === 'DELETE') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const id = data.id;
      const clearCompleted = data.clearCompleted;

      if (clearCompleted) {
        const result = await col.deleteMany({ userId: targetUserId, completed: true });
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, deletedCount: result.deletedCount }));
        return;
      }

      if (!id) {
        const result = await col.deleteMany({ userId: targetUserId });
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, deletedCount: result.deletedCount }));
        return;
      }

      const result = await col.deleteOne({ userId: targetUserId, id });
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, deletedCount: result.deletedCount }));
      return;
    }

    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  } catch (err: any) {
    // Offline in-memory fallback
    if (req.method === 'GET') {
      const items = fallbackShoppingMap.get(userId) || [];
      res.statusCode = 200;
      res.end(JSON.stringify({ userId, items, count: items.length, offline: true }));
      return;
    }

    if (req.method === 'POST') {
      const data = await parseBody(req);
      const targetUserId = data.userId || userId;
      const current = fallbackShoppingMap.get(targetUserId) || [];
      const item = {
        id: data.id || `shop-${Date.now()}`,
        userId: targetUserId,
        name: data.name,
        amount: data.amount || 1,
        unit: data.unit || '',
        completed: false,
        recipeSourceTitle: data.recipeSourceTitle || '',
        createdAt: new Date(),
      };
      fallbackShoppingMap.set(targetUserId, [item, ...current]);
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, item, offline: true }));
      return;
    }

    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message || 'Shopping list error' }));
  }
}
