import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest:{
        display:'standalone',
        display_override:['window-controls-overlay'],
        lang:'es-ES',
        name:"Balancea",
        short_name:"Balancea",
        description:"La herramienta definitiva para el control de tus gastos.",
        theme_color:"#19223c",
        background_color:"#d4d4d4",
        icons:[
          {
            src:'logo64x64.png',
            sizes:'64x64',
            type:'image/png',
          },
          {
            src:'logo192x192.png',
            sizes:'192x192',
            type:'image/png',
            purpose:'any',
          },
          {
            src:'logo512x512.png',
            sizes:'512x512',
            type:'image/png',
            purpose:'maskable',
          }
        ]
      }
    })
  ],
})
