import { checkDatabaseConnection, getDatabase, getClient } from '../src/server/db';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

async function main() {
  console.log('====================================================');
  console.log('COOKPRO — MONGODB ATLAS CONNECTION DIAGNOSTIC TEST');
  console.log('====================================================\n');

  const rawUri = process.env.MONGODB_URI || '';
  const dbName = process.env.MONGODB_DB || 'cookpro';

  console.log('Testing connection to MongoDB Atlas Cluster0 (Database: ' + dbName + ')...');
  const startTime = Date.now();

  try {
    let health = await checkDatabaseConnection();

    // If initial attempt failed, try with explicit authSource=admin or dbName path
    if (!health.connected && rawUri.startsWith('mongodb')) {
      try {
        let altUri = rawUri;
        if (!altUri.includes('authSource=')) {
          altUri += (altUri.includes('?') ? '&' : '?') + 'authSource=admin';
        }
        const client = new MongoClient(altUri, { serverSelectionTimeoutMS: 4000 });
        await client.connect();
        const db = client.db(dbName);
        await db.command({ ping: 1 });
        health = {
          connected: true,
          database: dbName,
          cluster: 'Cluster0',
        };
      } catch (err2: any) {
        health.error = err2.message;
      }
    }

    const duration = Date.now() - startTime;

    console.log(`Connection Status: ${health.connected ? '✅ CONNECTED' : '❌ FAILED'}`);
    console.log(`Latency: ${duration}ms`);
    console.log(`Database Name: ${health.database}`);
    console.log(`Cluster: ${health.cluster || 'Cluster0'}`);

    if (health.collections) {
      console.log('\n--- Collection Record Counts ---');
      console.log(`- recipes:           ${health.collections.recipes}`);
      console.log(`- ingredients:       ${health.collections.ingredients}`);
      console.log(`- pantryItems:       ${health.collections.pantryItems}`);
      console.log(`- savedRecipes:      ${health.collections.savedRecipes}`);
      console.log(`- shoppingListItems: ${health.collections.shoppingListItems}`);
      console.log(`- users:             ${health.collections.users}`);
    }

    if (health.error) {
      console.warn(`\nDiagnostic Detail: ${health.error}`);
      if (health.error.includes('bad auth') || health.error.includes('Authentication failed')) {
        console.log('\n💡 Tip: In MongoDB Atlas -> Security -> Database Access:');
        console.log('   Ensure the Database User username and password match your URI, and has "Read and write to any database" privileges.');
        console.log('   In Network Access: Ensure your IP is added (or 0.0.0.0/0).');
      }
    }

    if (health.connected) {
      const db = await getDatabase();
      const collections = await db.listCollections().toArray();
      console.log(`\nActive Collections in MongoDB Atlas: [${collections.map(c => c.name).join(', ')}]`);
    }

    console.log('\n====================================================');
    console.log(health.connected ? 'MONGODB ATLAS READY & OPERATIONAL!' : 'MONGODB ATLAS OFFLINE/FALLBACK ACTIVE');
    console.log('====================================================');
  } catch (err: any) {
    console.error('Fatal connection error:', err.message);
  }
}

main();
