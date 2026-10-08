// Vite config: React plugin plus the `@` alias for absolute imports from src/.
// Owns build-time wiring only — no app config lives here.
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  // PORT lets the preview harness assign a free port when 5173 is taken.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 5173 },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});