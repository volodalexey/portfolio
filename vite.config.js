import path from 'node:path'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    emptyOutDir: true
  },
  server: {
    port: 9120,
    host: true
  },
  plugins: [
    ViteMinifyPlugin({}),
  ],
})