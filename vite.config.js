import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // prevents Rollup from erroring on optional dependencies
      external: [],
      onwarn(warning, warn) {
        if (
          warning.code === 'UNRESOLVED_IMPORT' ||
          warning.message.includes('externalize this module')
        ) {
          console.warn('⚠️ Ignoring optional import:', warning.message)
          return
        }
        warn(warning)
      },
    },
  },
})



 

