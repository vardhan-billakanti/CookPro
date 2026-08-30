export type IngredientCategory =
  | 'Produce'
  | 'Dairy & Eggs'
  | 'Meat & Seafood'
  | 'Pantry & Grains'
  | 'Baking & Spices'
  | 'Oils & Condiments'
  | 'Other';

export interface IngredientDef {
  id: string;
  name: string;
  category: IngredientCategory;
  aliases: string[];
  commonUnits?: string[];
  isPopular?: boolean;
}

export interface RecipeIngredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  isOptional?: boolean;
  notes?: string;
  category?: IngredientCategory;
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  durationMinutes?: number;
  tip?: string;
}

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';
export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Dessert';
export type DietaryTag = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free' | 'Low-Carb' | 'High-Protein';

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  difficulty: DifficultyLevel;
  servings: number;
  cuisine: string;
  mealType: MealType;
  dietary: DietaryTag[];
  ingredients: RecipeIngredient[];
  instructions: RecipeStep[];
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  tags: string[];
}

export interface MatchedIngredientItem {
  recipeIngredient: RecipeIngredient;
  matchedWith: string;
}

export interface RecipeMatchResult {
  recipe: Recipe;
  matchScore: number; // 0 to 100
  relevanceScore: number; // Internal ranking score prioritizing distinctive ingredients
  matchedIngredients: MatchedIngredientItem[];
  missingIngredients: RecipeIngredient[];
  missingCount: number;
  totalRequiredCount: number;
  status: 'can_make_now' | 'almost_there' | 'explore_more';
  pantryUtilizationCount: number;
  matchedDistinctiveIngredients: string[];
}

export interface PantryItem {
  id: string;
  name: string;
  category: IngredientCategory;
  addedAt: string;
  quantity?: string;
}

export interface ShoppingListItem {
  id: string;
  name: string;
  amount?: number;
  unit?: string;
  isChecked: boolean;
  recipeSourceTitle?: string;
  addedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  dietaryPreferences: DietaryTag[];
  allergies: string[];
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
  maxCookingTime?: number;
}

export type MatchThreshold = 'all' | '100' | '90' | '75' | '50';
export type SortOption = 'match' | 'quickest' | 'easiest' | 'popular' | 'pantry_utilization';

export interface FilterOptions {
  matchThreshold: MatchThreshold;
  maxTime: number | null; // null means any
  mealTypes: MealType[];
  dietary: DietaryTag[];
  difficulty: DifficultyLevel[];
  cuisine: string[];
  sortBy: SortOption;
  useEverythingIHave?: boolean;
}

export type ActiveTab =
  | 'home'
  | 'find-recipes'
  | 'recipe-detail'
  | 'cookbook'
  | 'pantry'
  | 'shopping-list'
  | 'preferences';
