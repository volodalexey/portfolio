import { join, resolve } from 'node:path'
import { readdir, rm } from 'node:fs/promises'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  base: '',
  root: join(__dirname, "src"),
  build: {
    outDir: join(__dirname, "dist")
  },
  server: {
    port: 9120,
    host: true
  },
  plugins: [
    {
      name: "Cleaning dist folder",
      async buildStart() {
        let filePaths = []
        try {
          filePaths = await readdir(join(__dirname, 'dist'))
        } catch (err) {
          if (err.code !== 'ENOENT') {
            throw err
          }
        }
        for (const filePath of filePaths) {
          if (filePath.startsWith('.git')) {
            continue
          }
          await rm(filePath, { force: true, recursive: true })
        }
      }
    },
    ViteMinifyPlugin({}),
  ],
})