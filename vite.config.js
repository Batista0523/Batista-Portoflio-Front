import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', 
    assetsDir: 'assets', 
    sourcemap: true, 
    minify: 'terser', 
  },

  server: {
    port: 3000, 
    open: true, 
  },
})
