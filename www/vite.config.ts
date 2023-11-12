import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import vike from 'vike/plugin';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    vanillaExtractPlugin(), 
    vike({ 
      prerender: true,        
    })
  ],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist"
  },
  optimizeDeps: { include: ['react/jsx-runtime', 'vike-react/renderer/onRenderClient'] }
});
