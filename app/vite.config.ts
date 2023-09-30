import { defineConfig } from "vite";

import path from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@wander/sdk": path.resolve(__dirname, "../sdk/src"),
    },
  },

  server: {
    watch: { usePolling: true },
    host: true,
    port: 8002,
    strictPort: true,
    proxy: {
      "/api": "http://localhost:3131/api",
    },
  },
});
