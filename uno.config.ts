import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default),
      },
    }),
  ],
})
