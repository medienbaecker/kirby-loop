import { defineConfig } from 'kirbyup/config'

export default defineConfig({
  vite: {
    define: {
      panel: 'window.panel'
    },
    server: {
      cors: true
    }
  }
})