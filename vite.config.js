import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postcss from 'postcss'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    [svgr()],
    tailwindcss/postcss(),
  ],
  base: "/sunnyside-agency-landing-page/"
})
