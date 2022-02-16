<template>
  <div class="pageheader-doc-wrapper">
    <h1>Page Header 页头</h1>
    <p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>
    <div class="preview-wrapper">
      <Preview :component="PageHeaderPreview1" />
      <Preview :component="PageHeaderPreview2" />
      <Doc title="属性" type="prop" :body="propDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/breadcrumb', name: 'Breadcrumb 面包屑' }"
        :next="{ path: '/doc/tabs', name: '标签页 Tabs' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import PageHeaderPreview1 from "./PageHeaderPreview1.preview.vue";
import PageHeaderPreview2 from "./PageHeaderPreview2.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";

const propDoc = [
  ["icon", "图标组件", "Component", "-", "ArrowBack"],
  ["title", "标题", "string", "-", "Back"],
  ["content", "内容", "string", "-", "default"],
];
const eventDoc = [["back", "点击左侧区域触发", "-"]];

const slotDoc = [
  ["icon", "自定义图标"],
  ["title", "标题内容"],
  ["content", "内容"],
];
</script>

<style scoped></style>
