import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ActiveTab,
  Recipe,
  PantryItem,
  ShoppingListItem,
  FilterOptions,
  IngredientCategory,
  RecipeIngredient
} from '../types';
import { RECIPES_DATA } from '../data/recipes';
import { getAllRecipes } from '../services/recipeService';
import { useAuth } from './AuthContext';
import {
  loadFromStorage,
  saveToStorage,
  INITIAL_GUEST_PANTRY,
  INITIAL_GUEST_SHOPPING
} from '../utils/storage';

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'error';
  actionLabel?: string;
  onAction?: () => void;
}

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedRecipe: Recipe | null;
  openRecipeDetail: (recipe: Recipe) => void;
  closeRecipeDetail: () => void;
  
  // Ingredients Selection (Find Recipes)
  selectedIngredients: string[];
  addIngredient: (ingredient: string) => void;
  removeIngredient: (ingredient: string) => void;
  clearIngredients: () => void;
  setIngredients: (ingredients: string[]) => void;

  // Pantry
  pantryItems: PantryItem[];
  addToPantry: (name: string, category?: IngredientCategory, quantity?: string) => void;
  removeFromPantry: (id: string) => void;
  clearPantry: () => void;
  findRecipesFromPantry: () => void;
  isInPantry: (name: string) => boolean;

  // Cookbook (Saved Recipes)
  savedRecipeIds: string[];
  toggleSaveRecipe: (recipeId: string) => void;
  isRecipeSaved: (recipeId: string) => boolean;
  savedRecipes: Recipe[];

  // Shopping List
  shoppingList: ShoppingListItem[];
  addToShoppingList: (name: string, amount?: number, unit?: string, recipeSourceTitle?: string) => void;
  addMissingToShoppingList: (missing: RecipeIngredient[], recipeTitle: string) => void;
  toggleShoppingItem: (id: string) => void;
  removeFromShoppingList: (id: string) => void;
  clearCompletedShopping: () => void;
  clearAllShopping: () => void;

  // Filters
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  resetFilters: () => void;

  // Cooking Mode
  cookingRecipe: Recipe | null;
  startCookingMode: (recipe: Recipe) => void;
  exitCookingMode: () => void;

  // Global Search Modal
  isGlobalSearchOpen: boolean;
  openGlobalSearch: () => void;
  closeGlobalSearch: () => void;

  // Toasts
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'info' | 'error', actionLabel?: string, onAction?: () => void) => void;
  removeToast: (id: string) => void;
}

const DEFAULT_FILTERS: FilterOptions = {
  matchThreshold: 'all',
  maxTime: null,
  mealTypes: [],
  dietary: [],
  difficulty: [],
  cuisine: [],
  sortBy: 'match',
  useEverythingIHave: false,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const userId = user?.id || 'guest';

  // Navigation State
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Selected Ingredients for Find Recipes
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(() =>
    loadFromStorage<string[]>('selected_ingredients', ['Eggs', 'Tomato', 'Garlic', 'Rice'], userId)
  );

  // Pantry State
  const [pantryItems, setPantryItems] = useState<PantryItem[]>(() =>
    loadFromStorage<PantryItem[]>('pantry_items', INITIAL_GUEST_PANTRY, userId)
  );

  // Cookbook State
  const [savedRecipeIds, setSavedRecipeIds] = useState<string[]>(() =>
    loadFromStorage<string[]>('saved_recipe_ids', ['classic-egg-fried-rice', 'creamy-tomato-pasta'], userId)
  );

  // Shopping List State
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>(() =>
    loadFromStorage<ShoppingListItem[]>('shopping_list', INITIAL_GUEST_SHOPPING, userId)
  );

  // Filters State
  const [filters, setFilters] = useState<FilterOptions>(DEFAULT_FILTERS);

  // Distraction-Free Cooking Mode State
  const [cookingRecipe, setCookingRecipe] = useState<Recipe | null>(null);

  // Global Search Modal State
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);

  // Toasts State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to local storage per user
  useEffect(() => {
    saveToStorage('selected_ingredients', selectedIngredients, userId);
  }, [selectedIngredients, userId]);

  useEffect(() => {
    saveToStorage('pantry_items', pantryItems, userId);
  }, [pantryItems, userId]);

  useEffect(() => {
    saveToStorage('saved_recipe_ids', savedRecipeIds, userId);
  }, [savedRecipeIds, userId]);

  useEffect(() => {
    saveToStorage('shopping_list', shoppingList, userId);
  }, [shoppingList, userId]);

  // Load user data on user switch & try loading from MongoDB server API
  useEffect(() => {
    setSelectedIngredients(loadFromStorage<string[]>('selected_ingredients', ['Eggs', 'Tomato', 'Garlic', 'Rice'], userId));
    setPantryItems(loadFromStorage<PantryItem[]>('pantry_items', INITIAL_GUEST_PANTRY, userId));
    setSavedRecipeIds(loadFromStorage<string[]>('saved_recipe_ids', ['classic-egg-fried-rice', 'creamy-tomato-pasta'], userId));
    setShoppingList(loadFromStorage<ShoppingListItem[]>('shopping_list', INITIAL_GUEST_SHOPPING, userId));

    // Async sync from MongoDB Atlas API if online
    if (typeof fetch !== 'undefined') {
      fetch(`/api/pantry?userId=${encodeURIComponent(userId)}`)
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
          if (data?.items && Array.isArray(data.items) && data.items.length > 0) {
            setPantryItems(data.items);
          }
        })
        .catch(() => {});

      fetch(`/api/saved?userId=${encodeURIComponent(userId)}`)
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
          if (data?.savedRecipeIds && Array.isArray(data.savedRecipeIds)) {
            setSavedRecipeIds(data.savedRecipeIds);
          }
        })
        .catch(() => {});

      fetch(`/api/shopping?userId=${encodeURIComponent(userId)}`)
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
          if (data?.items && Array.isArray(data.items)) {
            setShoppingList(data.items);
          }
        })
        .catch(() => {});
    }
  }, [userId]);

  // Toast Helpers
  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'success', actionLabel?: string, onAction?: () => void) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type, actionLabel, onAction }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Recipe Detail Actions
  const openRecipeDetail = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setActiveTab('recipe-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
    setActiveTab('find-recipes');
  };

  // Ingredient Management
  const addIngredient = (ingredient: string) => {
    const trimmed = ingredient.trim();
    if (!trimmed) return;
    const exists = selectedIngredients.some(
      i => i.toLowerCase() === trimmed.toLowerCase()
    );
    if (!exists) {
      setSelectedIngredients(prev => [...prev, trimmed]);
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(prev =>
      prev.filter(i => i.toLowerCase() !== ingredient.toLowerCase())
    );
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
  };

  const setIngredients = (ingredients: string[]) => {
    setSelectedIngredients(ingredients);
  };

  // Pantry Management
  const addToPantry = (name: string, category: IngredientCategory = 'Other', quantity?: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const exists = pantryItems.some(item => item.name.toLowerCase() === trimmed.toLowerCase());
    if (exists) {
      addToast(`"${trimmed}" is already in your pantry.`, 'info');
      return;
    }

    const newItem: PantryItem = {
      id: 'pantry_' + Math.random().toString(36).substring(2, 9),
      name: trimmed,
      category,
      quantity: quantity || '',
      addedAt: new Date().toISOString(),
    };

    setPantryItems(prev => [newItem, ...prev]);
    addToast(`Added "${trimmed}" to your pantry!`, 'success');

    // Async sync to MongoDB
    fetch('/api/pantry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, ...newItem }),
    }).catch(() => {});
  };

  const removeFromPantry = (id: string) => {
    const item = pantryItems.find(i => i.id === id);
    setPantryItems(prev => prev.filter(i => i.id !== id));
    if (item) {
      addToast(`Removed "${item.name}" from pantry.`, 'info');
      fetch('/api/pantry', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, id }),
      }).catch(() => {});
    }
  };

  const clearPantry = () => {
    setPantryItems([]);
    addToast('Pantry cleared.', 'info');
    fetch('/api/pantry', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    }).catch(() => {});
  };

  const findRecipesFromPantry = () => {
    if (pantryItems.length === 0) {
      addToast('Your pantry is empty! Add ingredients first.', 'info');
      return;
    }
    const pantryIngredientNames = pantryItems.map(p => p.name);
    setSelectedIngredients(pantryIngredientNames);
    setActiveTab('find-recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    addToast(`Loaded ${pantryItems.length} ingredients from your pantry into Find Recipes!`, 'success');
  };

  const isInPantry = (name: string) => {
    return pantryItems.some(i => i.name.toLowerCase() === name.toLowerCase());
  };

  // Cookbook / Saved Recipes Management
  const toggleSaveRecipe = (recipeId: string) => {
    const isSaved = savedRecipeIds.includes(recipeId);
    if (isSaved) {
      setSavedRecipeIds(prev => prev.filter(id => id !== recipeId));
      addToast('Recipe removed from your Cookbook.', 'info');
    } else {
      setSavedRecipeIds(prev => [recipeId, ...prev]);
      addToast('Recipe saved to your Cookbook!', 'success');
    }

    // Async sync to MongoDB
    fetch('/api/saved', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, recipeId }),
    }).catch(() => {});
  };

  const isRecipeSaved = (recipeId: string) => {
    return savedRecipeIds.includes(recipeId);
  };

  // Build list of saved Recipe objects from full available recipe catalog
  const allAvailableRecipes = getAllRecipes();
  const savedRecipes = savedRecipeIds
    .map(id => allAvailableRecipes.find(r => r.id === id || r.slug === id) || RECIPES_DATA.find(r => r.id === id || r.slug === id))
    .filter((r): r is Recipe => Boolean(r));

  // Shopping List Management
  const addToShoppingList = (name: string, amount: number = 1, unit: string = '', recipeSourceTitle?: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const newItem: ShoppingListItem = {
      id: 'shop_' + Math.random().toString(36).substring(2, 9),
      name: trimmed,
      amount,
      unit,
      isChecked: false,
      recipeSourceTitle,
      addedAt: new Date().toISOString(),
    };

    setShoppingList(prev => [newItem, ...prev]);
    addToast(`Added "${trimmed}" to your shopping list.`, 'success');

    // Async sync to MongoDB
    fetch('/api/shopping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, ...newItem }),
    }).catch(() => {});
  };

  const addMissingToShoppingList = (missing: RecipeIngredient[], recipeTitle: string) => {
    if (!missing || missing.length === 0) return;

    const newItems: ShoppingListItem[] = missing.map(ing => ({
      id: 'shop_' + Math.random().toString(36).substring(2, 9),
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      isChecked: false,
      recipeSourceTitle: recipeTitle,
      addedAt: new Date().toISOString(),
    }));

    setShoppingList(prev => [...newItems, ...prev]);
    addToast(`Added ${missing.length} missing ingredients to your shopping list!`, 'success');

    // Async sync to MongoDB
    fetch('/api/shopping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        recipeSourceTitle: recipeTitle,
        items: newItems,
      }),
    }).catch(() => {});
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev =>
      prev.map(item => (item.id === id ? { ...item, isChecked: !item.isChecked } : item))
    );

    fetch('/api/shopping', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, id }),
    }).catch(() => {});
  };

  const removeFromShoppingList = (id: string) => {
    const item = shoppingList.find(i => i.id === id);
    setShoppingList(prev => prev.filter(i => i.id !== id));
    if (item) {
      addToast(`Removed "${item.name}" from shopping list.`, 'info');
      fetch('/api/shopping', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, id }),
      }).catch(() => {});
    }
  };

  const clearCompletedShopping = () => {
    const completedCount = shoppingList.filter(i => i.isChecked).length;
    if (completedCount === 0) {
      addToast('No completed items to clear.', 'info');
      return;
    }
    setShoppingList(prev => prev.filter(i => !i.isChecked));
    addToast(`Cleared ${completedCount} completed items.`, 'info');

    fetch('/api/shopping', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, clearCompleted: true }),
    }).catch(() => {});
  };

  const clearAllShopping = () => {
    setShoppingList([]);
    addToast('Shopping list cleared.', 'info');

    fetch('/api/shopping', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    }).catch(() => {});
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  // Cooking Mode Actions
  const startCookingMode = (recipe: Recipe) => {
    setCookingRecipe(recipe);
  };

  const exitCookingMode = () => {
    setCookingRecipe(null);
  };

  const openGlobalSearch = () => {
    setIsGlobalSearchOpen(true);
  };

  const closeGlobalSearch = () => {
    setIsGlobalSearchOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedRecipe,
        openRecipeDetail,
        closeRecipeDetail,
        selectedIngredients,
        addIngredient,
        removeIngredient,
        clearIngredients,
        setIngredients,
        pantryItems,
        addToPantry,
        removeFromPantry,
        clearPantry,
        findRecipesFromPantry,
        isInPantry,
        savedRecipeIds,
        toggleSaveRecipe,
        isRecipeSaved,
        savedRecipes,
        shoppingList,
        addToShoppingList,
        addMissingToShoppingList,
        toggleShoppingItem,
        removeFromShoppingList,
        clearCompletedShopping,
        clearAllShopping,
        filters,
        setFilters,
        resetFilters,
        cookingRecipe,
        startCookingMode,
        exitCookingMode,
        isGlobalSearchOpen,
        openGlobalSearch,
        closeGlobalSearch,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
