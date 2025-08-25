import { createViteConfig } from "@packages/vite-config";

// https://vite.dev/config/
export default createViteConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "element-plus/theme-chalk/src/index.scss";`,
      },
    },
  },
});