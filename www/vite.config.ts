import { defineConfig } from "vite";

import path from "path";

import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin as html } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    html({ minify: true }),
    viteCompression({ algorithm: "gzip" }),
    viteCompression({ algorithm: "brotliCompress" }),
    VitePWA({
      minify: true,
      registerType: "autoUpdate",
      injectRegister: "inline",
      workbox: {
        globPatterns: ["**/*.{html,css,js,ico}"],
      },
      base: "/",
      manifest: {},
    }),
  ],
  server: {
    watch: { usePolling: true },
    host: true,
    port: 8000,
    strictPort: true,
    proxy: {
      "/api": "http://wander_api:8001",
    },
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../shared/src"),
      "@images": path.resolve(__dirname, "./public/images"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    reportCompressedSize: false,
  },
  base:
    process.env.NODE_ENV === "production"
      ? "https://cdn.dorkodu.com/wander/"
      : "",
});
