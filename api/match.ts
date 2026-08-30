import type { IncomingMessage, ServerResponse } from 'http';
import { getRecipesCollection } from './_db';
import { RECIPES_DATA } from '../src/data/recipes';
import { filterAndSortRecipes } from '../src/utils/matchingEngine';
import { Recipe } from '../src/types';

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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const body = await parseBody(req);
    const userIngredients: string[] = Array.isArray(body.ingredients) ? body.ingredients : [];
    const filters = body.filters || {
      matchThreshold: 'all',
      maxTime: null,
      mealTypes: [],
      dietary: [],
      difficulty: [],
      cuisine: [],
      sortBy: 'match',
      useEverythingIHave: false,
    };

    let allRecipes: Recipe[] = [];

    try {
      const col = await getRecipesCollection();
      const dbRecipes = (await col.find({}).toArray()) as unknown as Recipe[];
      if (dbRecipes && dbRecipes.length > 0) {
        allRecipes = dbRecipes;
      } else {
        allRecipes = RECIPES_DATA;
      }
    } catch {
      allRecipes = RECIPES_DATA;
    }

    const matchedResults = filterAndSortRecipes(allRecipes, userIngredients, filters);

    const canMakeNow = matchedResults.filter(r => r.status === 'can_make_now');
    const almostThere = matchedResults.filter(r => r.status === 'almost_there');
    const exploreMore = matchedResults.filter(r => r.status === 'explore_more');

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        total: matchedResults.length,
        canMakeNowCount: canMakeNow.length,
        almostThereCount: almostThere.length,
        results: matchedResults,
      })
    );
  } catch (err: any) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message || 'Match error' }));
  }
}
