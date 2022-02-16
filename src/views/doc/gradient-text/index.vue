<template>
  <div class="gradient-text-doc-wrapper">
    <h1>渐变文字 Gradient Text</h1>
    <p>这个东西看起来没啥用，实际上确实没啥用。</p>
    <div class="preview-wrapper">
      <Preview :component="GradientTextPreview1" />
      <Preview :component="GradientTextPreview2" />
      <Preview :component="GradientTextPreview3" />
      <Doc title="属性" type="prop" :body="propDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/ellipsis', name: 'Ellipsis 文本省略' }"
        :next="{ path: '/doc/Icon', name: '图标 Icon' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import GradientTextPreview1 from "./GradientTextPreview1.preview.vue";
import GradientTextPreview2 from "./GradientTextPreview2.preview.vue";
import GradientTextPreview3 from "./GradientTextPreview3.preview.vue";
import Doc from "@/components/Doc.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";

const propDoc = [
  [
    "gradient",
    "文字渐变色参数",
    "{ from: string, to: string, deg: number / string }",
    "-",
    "{}",
  ],
  ["size", "文字大小", "number", "-", "16"],
  [
    "type",
    "渐变文字的类型",
    "string",
    "info / success / warning / error",
    "primary",
  ],
];
const slotDoc = [["default", "渐变文字内容"]];
</script>

<style scoped></style>
