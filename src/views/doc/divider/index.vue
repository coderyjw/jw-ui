<template>
  <div class="divider-doc-wrapper">
    <h1>分割线 Divider</h1>
    <p>区隔内容的分割线。</p>
    <div class="preview-wrapper">
      <Preview :component="DividerPreview1" />
      <Preview :component="DividerPreview2" />
      <Preview :component="DividerPreview3" />
      <Doc title="属性" type="prop" :body="propDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/button', name: 'Button 按钮' }"
        :next="{ path: '/doc/Ellipsis', name: '文本省略 Ellipsis' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import DividerPreview1 from "./DividerPreview1.preview.vue";
import DividerPreview2 from "./DividerPreview2.preview.vue";
import DividerPreview3 from "./DividerPreview3.preview.vue";
import Doc from "@/components/Doc.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";

const propDoc = [
  ["title-placement", "标题的位置", "string", "left / right / center", "left"],
  [
    "direction",
    "设置分割线方向",
    "string",
    "horizontal / vertical",
    "horizontal",
  ],
];
const slotDoc = [["default", "分割线的标题"]];
</script>

<style scoped></style>
