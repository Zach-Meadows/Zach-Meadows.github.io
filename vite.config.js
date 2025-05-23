import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // This ensures proper asset paths for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure compatibility with GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}) 