import { defineConfig } from 'vite'

import path from "path";

import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteCompression from "vite-plugin-compression";
import { VitePWA as vitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin as html } from "vite-plugin-html";

import postCSSPresetMantine from "postcss-preset-mantine";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [postCSSPresetMantine]
    }
  },
  plugins: [
    react(),
    vanillaExtractPlugin(),
    html({ minify: true }),
    viteCompression({ algorithm: "gzip" }),
    viteCompression({ algorithm: "brotliCompress" }),
    vitePWA({
      devOptions: { enabled: false },
      minify: true,
      registerType: "prompt",
      injectRegister: "inline",
      workbox: {
        globPatterns: ["**/*.{html,css,js,json,png,svg,webp,woff2}"],
      },
      base: "/",
      manifest: {
        name: "Trekie",
        short_name: "Trekie",
        description: "Your social and gamified digital life companion.",
        categories: [],
        start_url: "/",
        display: "standalone",
        orientation: "any",
        theme_color: "#1A1B1E",
        background_color: "#1A1B1E",
        icons: [
          { "src": "/favicon.ico", "type": "image/x-icon", "sizes": "16x16 32x32" },
          { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
          { "src": "/icon-512-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" },
          { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
          { "src": "/icon-192-maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
        ],
      },
    }),
  ],
  server: {
    watch: { usePolling: true },
    host: true,
    port: 3169,
    strictPort: true,
    proxy: {
      "/api": {
        target: "trekie_api:3196",
        ws: true,
      },
    },
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "../api/src"),
      "@sdk": path.resolve(__dirname, "../sdk/src"),
      "#": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    reportCompressedSize: false,
  },
})
