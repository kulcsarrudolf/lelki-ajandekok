import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Listen on all addresses (needed for Docker)
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Enable polling for file watching in Docker
    },
  },
})
