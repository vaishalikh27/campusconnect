import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Forward /api/* to the local backend (server/index.js) so the
    // frontend can call same-origin paths — no CORS config needed and
    // nothing about the backend's address is hardcoded into the bundle.
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
})
