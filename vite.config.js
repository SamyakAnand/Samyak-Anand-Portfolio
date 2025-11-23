import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure proper base path for deployment
  base: './',
  // Optimize build for production
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  // Optimize images
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  // Environment variables
  define: {
    // Provide fallbacks for environment variables
    'import.meta.env.VITE_RESUME_DOWNLOAD_URL': JSON.stringify(process.env.VITE_RESUME_DOWNLOAD_URL || '#'),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY || ''),
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID || ''),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID || ''),
  }
})