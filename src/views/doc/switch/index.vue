<template>
  <h1>Switch 示例</h1>
  <Demo :component="SwitchDemo1" />
  <Demo :component="SwitchDemo2" />
  <Demo :component="SwitchDemo3" />
</template>

<script setup lang="ts">
import Demo from "@/components/Demo";
import SwitchDemo1 from "./SwitchDemo1.demo.vue";
import SwitchDemo2 from "./SwitchDemo2.demo.vue";
import SwitchDemo3 from "./SwitchDemo3.demo.vue";
</script>

<style lang="scss">
.jw-switch + .jw-switch {
  margin-left: 8px;
  margin-top: 8px;
}
</style>
