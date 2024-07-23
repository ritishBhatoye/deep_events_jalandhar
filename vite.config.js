import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.MP4', '**/*.MOV'],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'sitemap.xml') {
            return 'sitemap.xml';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})