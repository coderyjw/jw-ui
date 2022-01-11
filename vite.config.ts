import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginVue from "./plugins/vue-custom-blocks-plugin";
const mdPlugin = require("vite-plugin-markdown");

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ["html", "vue"],
    }),
    vitePluginVue,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
