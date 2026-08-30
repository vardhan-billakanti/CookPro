import { PantryItem, ShoppingListItem, UserProfile } from '../types';

const COOKPRO_PREFIX = 'cookpro_v1_';

export function getStorageKey(key: string, userId: string = 'guest'): string {
  return `${COOKPRO_PREFIX}${userId}_${key}`;
}

export function loadFromStorage<T>(key: string, fallback: T, userId: string = 'guest'): T {
  try {
    const item = localStorage.getItem(getStorageKey(key, userId));
    if (!item) return fallback;
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error loading ${key} from storage:`, error);
    return fallback;
  }
}

export function saveToStorage<T>(key: string, value: T, userId: string = 'guest'): void {
  try {
    localStorage.setItem(getStorageKey(key, userId), JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to storage:`, error);
  }
}

// Global active user key (not prefixed with userId)
export function getStoredUser(): UserProfile | null {
  try {
    const data = localStorage.getItem(`${COOKPRO_PREFIX}active_user`);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setStoredUser(user: UserProfile | null): void {
  try {
    if (user) {
      localStorage.setItem(`${COOKPRO_PREFIX}active_user`, JSON.stringify(user));
    } else {
      localStorage.removeItem(`${COOKPRO_PREFIX}active_user`);
    }
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

export const INITIAL_GUEST_PANTRY: PantryItem[] = [
  { id: 'p1', name: 'Eggs', category: 'Dairy & Eggs', addedAt: new Date().toISOString() },
  { id: 'p2', name: 'Garlic', category: 'Produce', addedAt: new Date().toISOString() },
  { id: 'p3', name: 'Onion', category: 'Produce', addedAt: new Date().toISOString() },
  { id: 'p4', name: 'Olive Oil', category: 'Oils & Condiments', addedAt: new Date().toISOString() },
  { id: 'p5', name: 'Pasta', category: 'Pantry & Grains', addedAt: new Date().toISOString() },
  { id: 'p6', name: 'Tomato', category: 'Produce', addedAt: new Date().toISOString() },
  { id: 'p7', name: 'Soy Sauce', category: 'Oils & Condiments', addedAt: new Date().toISOString() },
  { id: 'p8', name: 'Rice', category: 'Pantry & Grains', addedAt: new Date().toISOString() },
];

export const INITIAL_GUEST_SHOPPING: ShoppingListItem[] = [
  { id: 's1', name: 'Parmesan Cheese', amount: 100, unit: 'g', isChecked: false, recipeSourceTitle: 'Creamy Tomato & Basil Pasta', addedAt: new Date().toISOString() },
  { id: 's2', name: 'Fresh Basil', amount: 1, unit: 'bunch', isChecked: false, recipeSourceTitle: 'Creamy Tomato & Basil Pasta', addedAt: new Date().toISOString() }
];
