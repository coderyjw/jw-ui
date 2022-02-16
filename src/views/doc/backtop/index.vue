<template>
  <div class="backtop-doc-wrapper">
    <h1>回到顶部 Backtop</h1>
    <div class="preview-wrapper" style="height: 3000px">
      <Preview :component="BacktopPreview1" />
      <Preview :component="BacktopPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import BacktopPreview1 from "./BacktopPreview1.preview.vue";
import BacktopPreview2 from "./BacktopPreview2.preview.vue";
</script>

<style scoped></style>
