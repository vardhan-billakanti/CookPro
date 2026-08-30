import { MongoClient, Db, Collection, Document, MongoClientOptions } from 'mongodb';
import * as dotenv from 'dotenv';

// Load .env.local and .env
dotenv.config({ path: '.env.local' });
dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'cookpro';

const options: MongoClientOptions = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 4000,
  connectTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientInstance: MongoClient | undefined;
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/**
 * Lazily initialize and get MongoClient instance with global connection caching
 */
export async function getClient(): Promise<MongoClient> {
  const currentUri = process.env.MONGODB_URI || uri;
  if (!currentUri || currentUri.includes('<username>') || currentUri.includes('<password>')) {
    throw new Error('MONGODB_URI is not configured or contains unreplaced placeholders.');
  }

  if (globalThis._mongoClientPromise) {
    return globalThis._mongoClientPromise;
  }

  const client = new MongoClient(currentUri, options);
  globalThis._mongoClientInstance = client;

  globalThis._mongoClientPromise = client
    .connect()
    .catch(err => {
      // Clear cached promise on failure so subsequent calls can retry
      globalThis._mongoClientPromise = undefined;
      throw err;
    });

  return globalThis._mongoClientPromise;
}

/**
 * Get MongoDB Database instance (defaults to 'cookpro')
 */
export async function getDatabase(name: string = dbName): Promise<Db> {
  const client = await getClient();
  return client.db(name);
}

/**
 * Typed collection getters
 */
export async function getRecipesCollection<T extends Document = Document>(): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>('recipes');
}

export async function getIngredientsCollection<T extends Document = Document>(): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>('ingredients');
}

export async function getUsersCollection<T extends Document = Document>(): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>('users');
}

export async function getPantryCollection<T extends Document = Document>(): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>('pantryItems');
}

export async function getSavedRecipesCollection<T extends Document = Document>(): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>('savedRecipes');
}

export async function getShoppingListCollection<T extends Document = Document>(): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>('shoppingListItems');
}

/**
 * Health check utility
 */
export async function checkDatabaseConnection(): Promise<{
  connected: boolean;
  database: string;
  cluster?: string;
  collections?: { [key: string]: number };
  error?: string;
}> {
  try {
    const client = await getClient();
    const db = client.db(dbName);
    await db.command({ ping: 1 });

    const [
      recipeCount,
      ingredientCount,
      pantryCount,
      savedCount,
      shoppingCount,
      userCount,
    ] = await Promise.all([
      db.collection('recipes').countDocuments().catch(() => 0),
      db.collection('ingredients').countDocuments().catch(() => 0),
      db.collection('pantryItems').countDocuments().catch(() => 0),
      db.collection('savedRecipes').countDocuments().catch(() => 0),
      db.collection('shoppingListItems').countDocuments().catch(() => 0),
      db.collection('users').countDocuments().catch(() => 0),
    ]);

    return {
      connected: true,
      database: dbName,
      cluster: 'Cluster0',
      collections: {
        recipes: recipeCount,
        ingredients: ingredientCount,
        pantryItems: pantryCount,
        savedRecipes: savedCount,
        shoppingListItems: shoppingCount,
        users: userCount,
      },
    };
  } catch (err: any) {
    return {
      connected: false,
      database: dbName,
      cluster: 'Cluster0',
      error: err.message || 'Unable to connect to MongoDB Atlas',
    };
  }
}
