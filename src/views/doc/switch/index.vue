<template>
  <h1>Switch 示例</h1>
  <Preview :component="SwitchPreview1" />
  <Preview :component="SwitchPreview2" />
  <Preview :component="SwitchPreview3" />
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import SwitchPreview1 from "./SwitchPreview1.preview.vue";
import SwitchPreview2 from "./SwitchPreview2.preview.vue";
import SwitchPreview3 from "./SwitchPreview3.preview.vue";
</script>

<style lang="scss">
.jw-switch + .jw-switch {
  margin-left: 8px;
  margin-top: 8px;
}
</style>
