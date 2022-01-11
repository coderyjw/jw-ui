import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
const mdPlugin = require("vite-plugin-markdown");
import fs from "fs";
import { baseParse } from "@vue/compiler-core";

const vitePluginVue = {
  name: "demo",
  transform(code, id) {
    if (!/vue&type=demo/.test(id)) {
      return;
    }
    const file = fs
      .readFileSync("./src/components/Button1.demo.vue")
      .toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "demo");
    const title = parsed.children[0].content;
    const main = file.split(parsed.loc.source).join("").trim();
    console.log({ code, id, file, parsed, title, main });
    // const file = fs.readFileSync(path).toString();
    // const parsed = baseParse(file).children.find((n) => n.tag === "demo");
    // const title = parsed.children[0].content;
    // const main = file.split(parsed.loc.source).join("").trim();
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
