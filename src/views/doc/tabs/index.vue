<template>
  <h1>Tabs 标签页</h1>
  <div class="preview-wrapper">
    <Preview :component="TabsPreview1" />
    <Preview :component="TabsPreview2" />
    <Doc title="属性" type="prop" :body="propDoc" />
    <PrevAndNext :prev="{ path: '/doc/breadcrumb', name: '面包屑 Breadcrumb' }" />
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import TabsPreview1 from "./TabsPreview1.preview.vue";
import TabsPreview2 from "./TabsPreview2.preview.vue";

const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "-"],
  ["type", "风格类型", "string", "line / card", "-"],
];
</script>
<style scoped></style>
