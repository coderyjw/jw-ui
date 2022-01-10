import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const mdPlugin = require("vite-plugin-markdown");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ["html"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
