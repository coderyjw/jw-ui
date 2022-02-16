<template>
  <h1>Tabs 标签页</h1>
  <p>在同一块区域切换内容。</p>
  <div class="preview-wrapper">
    <Preview :component="TabsPreview1" />
    <Preview :component="TabsPreview2" />
    <Doc title="属性" type="prop" :body="propDoc" />
    <PrevAndNext
      :prev="{ path: '/doc/page-header', name: '页头 PggeHeader' }"
    />
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
