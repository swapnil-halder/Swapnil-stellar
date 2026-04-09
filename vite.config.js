import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'app'),
  publicDir: resolve(__dirname, 'app/public'),
  plugins: [react()],
})
