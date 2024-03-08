import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  // https://stackoverflow.com/q/71180561
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'transcribeapp/assets/[name][extname]',
        chunkFileNames: 'transcribeapp/assets/[name].js',
        entryFileNames: 'transcribeapp/assets/[name].js',
      },
    },
  },
  // https://github.com/vitejs/vite/issues/12250
  worker: {
    rollupOptions: {
      output: {
        entryFileNames: 'transcribeapp/assets/[name].js',
      }
    }
  }
})
