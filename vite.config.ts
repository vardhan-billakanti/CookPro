import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import healthHandler from './api/health';
import recipesHandler from './api/recipes';
import matchHandler from './api/match';
import pantryHandler from './api/pantry';
import savedHandler from './api/saved';
import shoppingHandler from './api/shopping';
import syncHandler from './api/sync';

function apiServerPlugin(): Plugin {
  return {
    name: 'cookpro-api-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split('?')[0];
        if (path === '/api/health') {
          return healthHandler(req, res);
        }
        if (path === '/api/recipes') {
          return recipesHandler(req, res);
        }
        if (path === '/api/match') {
          return matchHandler(req, res);
        }
        if (path === '/api/pantry') {
          return pantryHandler(req, res);
        }
        if (path === '/api/saved') {
          return savedHandler(req, res);
        }
        if (path === '/api/shopping') {
          return shoppingHandler(req, res);
        }
        if (path === '/api/sync') {
          return syncHandler(req, res);
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), apiServerPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});
