import {
  getDatabase,
  getRecipesCollection,
  getIngredientsCollection,
  checkDatabaseConnection,
} from '../src/server/db';
import { RECIPES_DATA } from '../src/data/recipes';
import { MASTER_INGREDIENTS } from '../src/data/ingredients';
import { normalizeIngredient } from '../src/utils/matchingEngine';
import { transformMealDBMeal } from '../src/services/recipeService';

const MEALDB_API_BASE = 'https://www.themealdb.com/api/json/v1/1';
const SEED_CATEGORIES = ['Chicken', 'Lamb', 'Seafood', 'Vegetarian', 'Pasta', 'Beef', 'Breakfast', 'Dessert', 'Side'];

async function fetchCategoryMeals(category: string): Promise<any[]> {
  try {
    const res = await fetch(`${MEALDB_API_BASE}/filter.php?c=${encodeURIComponent(category)}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.meals || [];
  } catch {
    return [];
  }
}

async function fetchMealDetail(id: string): Promise<any | null> {
  try {
    const res = await fetch(`${MEALDB_API_BASE}/lookup.php?i=${encodeURIComponent(id)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.meals?.[0] || null;
  } catch {
    return null;
  }
}

async function migrate() {
  console.log('====================================================');
  console.log('COOKPRO — MONGODB ATLAS RECIPE & DATA MIGRATION');
  console.log('====================================================\n');

  console.log('Step 1: Checking MongoDB Atlas Cluster0 connection...');
  const health = await checkDatabaseConnection();

  if (!health.connected) {
    console.error('❌ MongoDB Atlas connection failed:', health.error);
    console.error('Please verify MONGODB_URI in your environment or .env.local.');
    process.exit(1);
  }

  console.log(`✅ Connected to database: "${health.database}" on Cluster0\n`);

  const db = await getDatabase();
  const recipeCol = await getRecipesCollection();
  const ingCol = await getIngredientsCollection();

  // Step 2: Create Collections & Indexes
  console.log('Step 2: Creating database collections & optimal indexes...');
  try {
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
      db.collection('users').createIndex({ userId: 1 }, { unique: true }),
    ]);
    console.log('✅ Collections & indexes created successfully.\n');
  } catch (err: any) {
    console.warn('⚠️ Index creation notice:', err.message);
  }

  // Step 3: Migrate Master Ingredients
  console.log(`Step 3: Migrating ${MASTER_INGREDIENTS.length} Master Ingredients & Canonical Aliases...`);
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
  console.log(`✅ ${ingredientsInserted} Master Ingredients synchronized.\n`);

  // Step 4: Migrate Local Curated Recipes
  console.log(`Step 4: Migrating ${RECIPES_DATA.length} Curated Master Recipes into MongoDB...`);
  let curatedUpserted = 0;

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
      source: 'CookPro Curated Master Catalog',
      updatedAt: new Date(),
    };

    await recipeCol.updateOne(
      { externalId },
      { $set: doc },
      { upsert: true }
    );
    curatedUpserted++;
  }
  console.log(`✅ ${curatedUpserted} Curated Master Recipes synchronized.\n`);

  // Step 5: Import & Normalize verified External TheMealDB Catalog into MongoDB Atlas
  console.log('Step 5: Importing verified global recipes from TheMealDB into MongoDB Atlas...');
  let externalImported = 0;
  let skippedDuplicates = 0;

  for (const category of SEED_CATEGORIES) {
    const meals = await fetchCategoryMeals(category);
    // Take top 15 meals per category to build a comprehensive 120+ catalog
    const topMeals = meals.slice(0, 15);
    for (const m of topMeals) {
      const externalId = `mealdb-${m.idMeal}`;
      const existing = await recipeCol.findOne({ externalId });
      if (existing) {
        skippedDuplicates++;
        continue;
      }

      const fullMeal = await fetchMealDetail(m.idMeal);
      if (fullMeal) {
        const transformed = transformMealDBMeal(fullMeal);
        const normalizedIngredients = transformed.ingredients.map(i => ({
          ...i,
          normalizedName: normalizeIngredient(i.name),
        }));

        const doc = {
          externalId,
          id: transformed.id,
          title: transformed.title,
          slug: transformed.slug,
          description: transformed.description,
          image: transformed.image,
          prepTime: transformed.prepTime,
          cookTime: transformed.cookTime,
          totalTime: transformed.totalTime,
          difficulty: transformed.difficulty,
          servings: transformed.servings,
          cuisine: transformed.cuisine,
          mealType: transformed.mealType,
          dietary: transformed.dietary,
          rating: transformed.rating,
          reviewCount: transformed.reviewCount,
          isPopular: transformed.isPopular,
          tags: transformed.tags,
          ingredients: normalizedIngredients,
          instructions: transformed.instructions,
          source: 'TheMealDB Verified Global Catalog',
          updatedAt: new Date(),
        };

        await recipeCol.updateOne(
          { externalId },
          { $set: doc },
          { upsert: true }
        );
        externalImported++;
      }
    }
  }

  console.log(`✅ ${externalImported} External Global Recipes imported into MongoDB.`);
  console.log(`ℹ️ ${skippedDuplicates} existing recipes preserved.\n`);

  const finalRecipeCount = await recipeCol.countDocuments();
  const finalIngCount = await ingCol.countDocuments();

  console.log(`--- FINAL MONGODB ATLAS DATABASE SUMMARY ---`);
  console.log(`- Total Curated Recipes:        ${RECIPES_DATA.length}`);
  console.log(`- Total Recipes in Atlas DB:    ${finalRecipeCount}`);
  console.log(`- Total Ingredients in DB:      ${finalIngCount}\n`);

  console.log('====================================================');
  console.log('MIGRATION FINISHED SUCCESSFULLY!');
  console.log('====================================================');
  process.exit(0);
}

migrate().catch(err => {
  console.error('Migration error:', err);
  process.exit(1);
});
