// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/infution_portfolio/', // <- your GitHub repo name
  plugins: [react()],
})