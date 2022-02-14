<template>
  <div class="tag-doc-wrapper">
    <h1>标签 Tag</h1>
    <div class="preview-wrapper">
      <Preview :component="TagPreview1" />
      <Preview :component="TagPreview2" />
      <Preview :component="TagPreview3" />
      <Preview :component="TagPreview4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TagPreview1 from "./TagPreview1.preview.vue";
import TagPreview2 from "./TagPreview2.preview.vue";
import TagPreview3 from "./TagPreview3.preview.vue";
import TagPreview4 from "./TagPreview4.preview.vue";
</script>

<style lang="scss">
.jw-tag {
  margin-right: 8px;
}
</style>
