<template>
  <div class="affix-doc-wrapper">
    <h1>固钉 Affix</h1>
    <div class="preview-wrapper" style="height: 3000px; padding: 1000px 0">
      <Preview :component="AffixPreview1" />
      <Preview :component="AffixPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import AffixPreview1 from "./AffixPreview1.preview.vue";
import AffixPreview2 from "./AffixPreview2.preview.vue";
</script>

<style lang="scss">
.jw-affix {
  margin-right: 8px;
}
</style>
