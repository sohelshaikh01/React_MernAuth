import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://mern-auth-myapp.netlify.app',
        changeOrigin: true,
      }
    }    
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
