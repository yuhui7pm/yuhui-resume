import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetTypography } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yuhui-resume/',
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetTypography()],
    }),
  ],
})
