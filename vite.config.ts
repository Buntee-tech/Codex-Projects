import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@core': path.resolve(import.meta.dirname, './core'),
      '@shared': path.resolve(import.meta.dirname, './shared'),
    },
  },
});
