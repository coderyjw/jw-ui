<template>
  <div class="pageheader-doc-wrapper">
    <h1>Page Header 页头</h1>
    <p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>
    <div class="preview-wrapper">
      <Preview :component="PageHeaderPreview1" />
      <Preview :component="PageHeaderPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import PageHeaderPreview1 from "./PageHeaderPreview1.preview.vue";
import PageHeaderPreview2 from "./PageHeaderPreview2.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
</script>

<style scoped></style>
