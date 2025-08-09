import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react-swc'
import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @see https://vite.dev/config/ */
export default defineConfig({
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [react(), tailwindcss()],
})
