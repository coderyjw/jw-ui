<template>
  <div class="radio-doc-wrapper">
    <h1>Radio 单选框</h1>
    <div class="preview-wrapper">
      <Preview :component="RaidoPreview1" />
      <Preview :component="RaidoPreview2" />
      <Preview :component="RaidoPreview3" />
      <Preview :component="RaidoPreview4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import RaidoPreview1 from "./RaidoPreview1.preview.vue";
import RaidoPreview2 from "./RaidoPreview2.preview.vue";
import RaidoPreview3 from "./RaidoPreview3.preview.vue";
import RaidoPreview4 from "./RaidoPreview4.preview.vue";
</script>

<style scoped></style>
