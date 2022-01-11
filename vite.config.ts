import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const mdPlugin = require("vite-plugin-markdown");
import fs from "fs";
import { baseParse } from "@vue/compiler-core";

const vitePluginVue = {
  name: "demo",
  transform(code, id) {
    if (
      !/\/src\/views\/doc\/.*\.demo\.vue/.test(id) ||
      !/vue&type=demo/.test(id)
    ) {
      return;
    }
    let path = `.${id.match(/\/src\/views\/doc\/.*\.demo\.vue/)[0]}`;
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "demo");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();

    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  },
};
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ["html"],
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
