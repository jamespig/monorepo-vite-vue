import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import UnoCSS from "unocss/vite";

export function createViteConfig(options) {
  const { root, plugins = [], resolveOptions = {} } = options;

  return defineConfig({
    root,
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      UnoCSS({ configFile: fileURLToPath(new URL("../../uno.config.js", import.meta.url)) }),
      ...plugins,
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        ...resolveOptions.alias,
      },
      ...resolveOptions,
    },
  });
}
