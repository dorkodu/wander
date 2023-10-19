/// <reference types="vitest" />
import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],

  test: {},

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@wander/sdk": path.resolve(__dirname, "../sdk/src"),
    },
  },
});
