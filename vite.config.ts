import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // You can add SCSS options here, for example:
        // additionalData: `@import "src/styles/variables.scss";`
      },
    },
  },
})
