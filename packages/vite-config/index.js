import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath, URL } from "node:url";

export function createViteConfig(options) {
  const { root, plugins = [], resolve = {}, test } = options;

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
      ...plugins,
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@packages/ui": fileURLToPath(
          new URL("../../packages/ui/src", import.meta.url)
        ),
        "@packages/vite-config": fileURLToPath(
          new URL("../../packages/vite-config/src", import.meta.url)
        ),
        ...resolve.alias,
      },
      ...resolve,
    },
    test,
  });
}
