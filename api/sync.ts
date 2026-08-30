import type { IncomingMessage, ServerResponse } from 'http';
import { getRecipesCollection, getIngredientsCollection, getDatabase } from './_db';
import { RECIPES_DATA } from '../src/data/recipes';
import { MASTER_INGREDIENTS } from '../src/data/ingredients';
import { normalizeIngredient } from '../src/utils/matchingEngine';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  try {
    const db = await getDatabase();
    const recipeCol = await getRecipesCollection();
    const ingCol = await getIngredientsCollection();

    // 1. Create optimal indexes
    await Promise.all([
      recipeCol.createIndex({ externalId: 1 }, { unique: true }),
      recipeCol.createIndex({ title: 'text', description: 'text', cuisine: 'text' }),
      recipeCol.createIndex({ 'ingredients.normalizedName': 1 }),
      recipeCol.createIndex({ cuisine: 1 }),
      recipeCol.createIndex({ mealType: 1 }),
      recipeCol.createIndex({ dietary: 1 }),
      ingCol.createIndex({ normalizedName: 1 }, { unique: true }),
      ingCol.createIndex({ aliases: 1 }),
      db.collection('pantryItems').createIndex({ userId: 1, normalizedName: 1 }),
      db.collection('savedRecipes').createIndex({ userId: 1, recipeId: 1 }, { unique: true }),
      db.collection('shoppingListItems').createIndex({ userId: 1 }),
    ]).catch(err => console.warn('Index creation notice:', err.message));

    // 2. Migrate Master Ingredients
    let ingredientsInserted = 0;
    for (const ing of MASTER_INGREDIENTS) {
      const normalizedName = normalizeIngredient(ing.name);
      await ingCol.updateOne(
        { normalizedName },
        {
          $set: {
            id: ing.id,
            name: ing.name,
            normalizedName,
            category: ing.category,
            aliases: ing.aliases.map(a => normalizeIngredient(a)),
            isPopular: ing.isPopular || false,
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
      ingredientsInserted++;
    }

    // 3. Migrate Local Curated Recipes
    let recipesInserted = 0;
    let duplicatesPrevented = 0;

    for (const recipe of RECIPES_DATA) {
      const externalId = `local-${recipe.id}`;
      const normalizedIngredients = recipe.ingredients.map(i => ({
        ...i,
        normalizedName: normalizeIngredient(i.name),
      }));

      const doc = {
        externalId,
        id: recipe.id,
        title: recipe.title,
        slug: recipe.slug,
        description: recipe.description,
        image: recipe.image,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        totalTime: recipe.totalTime,
        difficulty: recipe.difficulty,
        servings: recipe.servings,
        cuisine: recipe.cuisine,
        mealType: recipe.mealType,
        dietary: recipe.dietary,
        rating: recipe.rating,
        reviewCount: recipe.reviewCount,
        isPopular: recipe.isPopular || false,
        tags: recipe.tags,
        ingredients: normalizedIngredients,
        instructions: recipe.instructions,
        source: 'CookPro Curated Master Database',
        updatedAt: new Date(),
      };

      const result = await recipeCol.updateOne(
        { externalId },
        { $set: doc },
        { upsert: true }
      );

      if (result.upsertedCount > 0) {
        recipesInserted++;
      } else {
        duplicatesPrevented++;
      }
    }

    const totalRecipes = await recipeCol.countDocuments();
    const totalIngredients = await ingCol.countDocuments();

    res.statusCode = 200;
    res.end(
      JSON.stringify({
        success: true,
        database: 'cookpro',
        cluster: 'Cluster0',
        recipesMigrated: RECIPES_DATA.length,
        recipesNewlyInserted: recipesInserted,
        duplicatesPrevented,
        totalRecipesInDB: totalRecipes,
        totalIngredientsInDB: totalIngredients,
      })
    );
  } catch (err: any) {
    res.statusCode = 500;
    res.end(JSON.stringify({ success: false, error: err.message }));
  }
}
