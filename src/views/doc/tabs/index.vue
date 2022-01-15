<template>
  <h1>Tabs 标签页</h1>
  <Preview :component="TabsPreview1" />
  <Preview :component="TabsPreview2" />
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TabsPreview1 from "./TabsPreview1.preview.vue";
import TabsPreview2 from "./TabsPreview2.preview.vue";
</script>
<style scoped></style>
