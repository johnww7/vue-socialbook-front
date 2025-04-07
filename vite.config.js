import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('ion-icon')
        }
      }
    })
  ],
  define: {
    // enable hydration mismatch details in production build
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
  },
  server: {
    hmr:{
      overlay:false
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
