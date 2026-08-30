import { Recipe, RecipeIngredient, RecipeStep, DietaryTag } from '../types';
import { RECIPES_DATA } from '../data/recipes';

const MEALDB_API_BASE = 'https://www.themealdb.com/api/json/v1/1';
const CACHE_KEY = 'cookpro_external_recipes_cache';

// In-memory runtime recipe registry
const runtimeRecipeMap = new Map<string, Recipe>();

// Initialize in-memory registry with built-in master dataset
RECIPES_DATA.forEach(r => runtimeRecipeMap.set(r.id, r));

// Hydrate from localStorage if available
try {
  const cached = typeof localStorage !== 'undefined' ? localStorage.getItem(CACHE_KEY) : null;
  if (cached) {
    const parsed: Recipe[] = JSON.parse(cached);
    parsed.forEach(r => runtimeRecipeMap.set(r.id, r));
  }
} catch {
  // Ignore local storage error in non-browser environments
}

function persistCache() {
  try {
    if (typeof localStorage === 'undefined') return;
    const list = Array.from(runtimeRecipeMap.values()).filter(
      r => !RECIPES_DATA.some(builtin => builtin.id === r.id)
    );
    localStorage.setItem(CACHE_KEY, JSON.stringify(list.slice(0, 200)));
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Transform raw TheMealDB JSON recipe into structured CookPro Recipe format
 */
export function transformMealDBMeal(meal: any): Recipe {
  const ingredients: RecipeIngredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingName = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (ingName && ingName.length > 0) {
      // Parse measure into amount and unit
      let amount = 1;
      let unit = '';
      const numMatch = measure?.match(/^([\d\.\/\s]+)(.*)$/);
      if (numMatch) {
        const numPart = numMatch[1].trim();
        unit = numMatch[2].trim();
        if (numPart.includes('/')) {
          const [num, den] = numPart.split('/');
          amount = (parseFloat(num) || 1) / (parseFloat(den) || 1);
        } else {
          amount = parseFloat(numPart) || 1;
        }
      } else {
        unit = measure || '';
      }

      // Check if garnish/optional
      const isOptional =
        /garnish|optional|to taste|pinch|for serving/i.test(measure || '') ||
        /cilantro|parsley|mint|sesame seeds|chili flakes/i.test(ingName);

      ingredients.push({
        id: `mealdb-ing-${meal.idMeal}-${i}`,
        name: ingName,
        amount,
        unit: unit || 'item',
        isOptional,
        notes: measure ? measure : undefined,
      });
    }
  }

  // Parse instructions into structured steps
  const rawInstructions: string = meal.strInstructions || '';
  const lines = rawInstructions
    .split(/\r?\n|\.\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 15);

  const instructions: RecipeStep[] = lines.length > 0
    ? lines.map((text, idx) => ({
        stepNumber: idx + 1,
        title: `Step ${idx + 1}`,
        instruction: text.endsWith('.') ? text : `${text}.`,
        durationMinutes: idx === 0 ? 5 : idx === lines.length - 1 ? 2 : 8,
      }))
    : [
        {
          stepNumber: 1,
          title: 'Preparation & Cooking',
          instruction: rawInstructions || 'Follow recipe directions according to ingredient preparation.',
          durationMinutes: 20,
        },
      ];

  // Estimate prep/cook time based on category
  const category = meal.strCategory || 'General';
  let prepTime = 10;
  let cookTime = 20;

  if (/lamb|mutton|beef|pork/i.test(category)) {
    prepTime = 15;
    cookTime = 40;
  } else if (/seafood|dessert|breakfast|pasta/i.test(category)) {
    prepTime = 8;
    cookTime = 15;
  } else if (/vegetarian|starter|side/i.test(category)) {
    prepTime = 10;
    cookTime = 15;
  }

  // Map dietary tags strictly to DietaryTag type
  const dietary: DietaryTag[] = [];
  if (/vegetarian/i.test(category)) {
    dietary.push('Vegetarian');
  }
  if (/vegan/i.test(category)) {
    dietary.push('Vegan');
  }
  if (/chicken|beef|lamb|mutton|seafood|fish/i.test(category)) {
    dietary.push('High-Protein');
  }

  // Fallback description
  const description = `A classic ${meal.strArea || ''} ${meal.strMeal} prepared with ${ingredients.slice(0, 3).map(i => i.name).join(', ')}.`;

  return {
    id: `mealdb-${meal.idMeal}`,
    title: meal.strMeal,
    slug: meal.strMeal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    description,
    image: meal.strMealThumb || 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    prepTime,
    cookTime,
    totalTime: prepTime + cookTime,
    difficulty: ingredients.length > 8 ? 'Medium' : 'Easy',
    servings: 4,
    cuisine: meal.strArea || 'International',
    mealType: /breakfast/i.test(category) ? 'Breakfast' : /dessert/i.test(category) ? 'Dessert' : 'Dinner',
    dietary,
    rating: 4.85,
    reviewCount: 150 + (parseInt(meal.idMeal, 10) % 200),
    isPopular: false,
    tags: [meal.strArea, category].filter(Boolean),
    ingredients,
    instructions,
  };
}

/**
 * Global Search: Queries MongoDB Atlas server API with fallback to TheMealDB & local catalog
 */
export async function searchRecipes(query: string): Promise<Recipe[]> {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return Array.from(runtimeRecipeMap.values());

  // 1. Try fetching from MongoDB Atlas server API
  try {
    const apiRes = await fetch(`/api/recipes?q=${encodeURIComponent(trimmed)}`);
    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data.recipes && Array.isArray(data.recipes) && data.recipes.length > 0) {
        for (const r of data.recipes) {
          if (!runtimeRecipeMap.has(r.id)) {
            runtimeRecipeMap.set(r.id, r);
          }
        }
        persistCache();
        return data.recipes;
      }
    }
  } catch {
    // API not reachable in pure static test mode, continue to local & external search
  }

  // 2. Fetch from TheMealDB by title
  try {
    const searchUrl = `${MEALDB_API_BASE}/search.php?s=${encodeURIComponent(trimmed)}`;
    const response = await fetch(searchUrl);
    if (response.ok) {
      const data = await response.json();
      if (data.meals && Array.isArray(data.meals)) {
        for (const rawMeal of data.meals) {
          const transformed = transformMealDBMeal(rawMeal);
          if (!runtimeRecipeMap.has(transformed.id)) {
            runtimeRecipeMap.set(transformed.id, transformed);
          }
        }
        persistCache();
      }
    }

    // 3. Also check by ingredient if single word
    if (!trimmed.includes(' ')) {
      const apiIng = trimmed === 'mutton' ? 'lamb' : trimmed;
      const ingUrl = `${MEALDB_API_BASE}/filter.php?i=${encodeURIComponent(apiIng)}`;
      const ingResponse = await fetch(ingUrl);
      if (ingResponse.ok) {
        const ingData = await ingResponse.json();
        if (ingData.meals && Array.isArray(ingData.meals)) {
          const topMeals = ingData.meals.slice(0, 5);
          await Promise.all(
            topMeals.map(async (m: any) => {
              const lookupUrl = `${MEALDB_API_BASE}/lookup.php?i=${m.idMeal}`;
              const lRes = await fetch(lookupUrl);
              if (lRes.ok) {
                const lData = await lRes.json();
                if (lData.meals?.[0]) {
                  const transformed = transformMealDBMeal(lData.meals[0]);
                  if (!runtimeRecipeMap.has(transformed.id)) {
                    runtimeRecipeMap.set(transformed.id, transformed);
                  }
                }
              }
            })
          );
          persistCache();
        }
      }
    }
  } catch (err) {
    console.warn('External recipe fetch error:', err);
  }

  // 4. Return combined, deduplicated results matching query
  const combined = Array.from(runtimeRecipeMap.values()).filter(recipe => {
    const titleMatch = recipe.title.toLowerCase().includes(trimmed);
    const cuisineMatch = recipe.cuisine.toLowerCase().includes(trimmed);
    const tagMatch = recipe.tags.some(t => t.toLowerCase().includes(trimmed));
    const ingredientMatch = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(trimmed));
    return titleMatch || cuisineMatch || tagMatch || ingredientMatch;
  });

  return combined;
}

/**
 * Get all available recipes in registry
 */
export function getAllRecipes(): Recipe[] {
  return Array.from(runtimeRecipeMap.values());
}

/**
 * Get single recipe by ID
 */
export async function getRecipeById(id: string): Promise<Recipe | null> {
  if (runtimeRecipeMap.has(id)) {
    return runtimeRecipeMap.get(id)!;
  }

  // Try server API
  try {
    const res = await fetch(`/api/recipes?id=${encodeURIComponent(id)}`);
    if (res.ok) {
      const recipe = await res.json();
      if (recipe && recipe.id) {
        runtimeRecipeMap.set(recipe.id, recipe);
        persistCache();
        return recipe;
      }
    }
  } catch {
    // Continue fallback
  }

  if (id.startsWith('mealdb-')) {
    const realId = id.replace('mealdb-', '');
    try {
      const response = await fetch(`${MEALDB_API_BASE}/lookup.php?i=${realId}`);
      if (response.ok) {
        const data = await response.json();
        if (data.meals?.[0]) {
          const transformed = transformMealDBMeal(data.meals[0]);
          runtimeRecipeMap.set(transformed.id, transformed);
          persistCache();
          return transformed;
        }
      }
    } catch {
      // Fallback
    }
  }

  return null;
}
