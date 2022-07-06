import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*{js,css,html,ico,png,svg}']
        },
        devOptions: {
          enabled: true
        },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
        manifest: {
          name: 'TODO APP',
          short_name: 'TODO',
          description: 'ToDo App - The best method to manage your tasks',
          theme_color: '#4EA8DE',
          icons: [
            {
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'android-chrome--512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }
    )
  ]
})