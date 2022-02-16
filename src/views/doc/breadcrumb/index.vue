<template>
  <div class="breadcrumb-doc-wrapper">
    <h1>面包屑 Breadcrumb</h1>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <div class="preview-wrapper">
      <Preview :component="BreadcrumbPreview1" />
      <Preview :component="BreadcrumbPreview2" />
      <Doc title="Breadcrumb 属性" type="prop" :body="propsDoc" />
      <Doc title="Breadcrumb 插槽" type="slot" :body="slotDoc" />
      <Doc title="Breadcrumb Item 属性" type="prop" :body="props1Doc" />
      <Doc title="Breadcrumb Item 插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/backtop', name: '回到顶部 Backtop' }"
        :next="{ path: '/doc/page-header', name: '页头 PggeHeader' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import BreadcrumbPreview1 from "./BreadcrumbPreview1.preview.vue";
import BreadcrumbPreview2 from "./BreadcrumbPreview2.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propsDoc = [
  ["separator", "分隔符", "string", "-", "/"],
  ["separator-icon", "图标分隔符的组件或组件名", "Component", "-", "-"],
];
const props1Doc = [
  ["to", "路由跳转目标，同 vue-router 的 to属性", "object", "-", "/"],
  [
    "separator-icon",
    "如果设置该属性为 true, 导航将不会留下历史记录",
    "boolean",
    "-",
    "false",
  ],
];
const slotDoc = [["default", "自定义默认内容"]];
</script>

<style scoped></style>
