import type { IncomingMessage, ServerResponse } from 'http';
import { checkDatabaseConnection } from './_db';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  try {
    const health = await checkDatabaseConnection();
    res.statusCode = health.connected ? 200 : 503;
    res.end(JSON.stringify(health, null, 2));
  } catch (err: any) {
    res.statusCode = 500;
    res.end(
      JSON.stringify({
        connected: false,
        database: 'cookpro',
        error: err.message || 'Health check error',
      })
    );
  }
}
