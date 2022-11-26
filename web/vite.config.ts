import { defineConfig } from 'vite'

import path from 'path'

import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin as html } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    html({ minify: true }),
    viteCompression({ algorithm: "gzip" }),
    viteCompression({ algorithm: "brotliCompress" }),
    VitePWA({
      devOptions: { enabled: true },
      minify: true,
      registerType: "prompt",
      injectRegister: "inline",
      workbox: {
        globPatterns: ["**/*.{html,css,js,ico}"]
      },
      manifest: {}
    })
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, '../shared/src'),
    }
  }
})
