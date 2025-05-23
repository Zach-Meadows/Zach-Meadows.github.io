import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // For username.github.io repositories, use root path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure compatibility with GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Ensure proper file extensions for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Ensure ES modules work properly
    target: 'es2015',
    minify: 'esbuild',
  },
}) 