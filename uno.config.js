import { defineConfig, } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  // 掃描所有子包的源碼
  content: {
    filesystem: [
      'packages/*/src/**/*.{vue,js,ts,jsx,tsx}',
      'apps/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ]
  },
  // 你的 UnoCSS 配置
  shortcuts: [
    // 自定義快捷方式
  ],
  theme: {
    // 主題配置
  },
  presets: [
    presetUno(),
  ]
})