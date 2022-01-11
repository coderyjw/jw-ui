<template>
  <h1>Button 示例</h1>
  <div class="demo-wrapper">
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Demo :component="ButtonDemo5" />
    <Demo :component="ButtonDemo6" />
  </div>
</template>

<script setup lang="ts">
import Demo from "@/components/Demo";
import ButtonDemo1 from "./ButtonDemo1.demo.vue";
import ButtonDemo2 from "./ButtonDemo2.demo.vue";
import ButtonDemo3 from "./ButtonDemo3.demo.vue";
import ButtonDemo4 from "./ButtonDemo4.demo.vue";
import ButtonDemo5 from "./ButtonDemo5.demo.vue";
import ButtonDemo6 from "./ButtonDemo6.demo.vue";
</script>

<style lang="scss">
.jw-button + .jw-button {
  margin-left: 8px;
  margin-top: 8px;
}
</style>
