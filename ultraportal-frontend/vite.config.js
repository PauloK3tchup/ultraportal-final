import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // Proxy para desenvolvimento local - rota /api para o backend
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path
      }
    },
    host: '0.0.0.0',
    port: 5173,
    // HMR (websocket) settings — use variáveis de ambiente para expor o host/porta públicos
    hmr: {
      // Host que o cliente do browser deve usar para conectar ao websocket (ex: IP público da EC2)
      host: process.env.VITE_HMR_HOST || undefined,
      // Porta pública onde o websocket está exposto (se diferente da 5173)
      port: process.env.VITE_HMR_CLIENT_PORT ? Number(process.env.VITE_HMR_CLIENT_PORT) : undefined,
      // Forçar protocolo caso esteja atrás de TLS/HTTPS
      protocol: process.env.VITE_HMR_PROTOCOL || undefined
    }
  }
})
