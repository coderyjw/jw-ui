<template>
  <div class="button-doc-wrapper"></div>
</template>

<script setup lang="ts">
import Demo from "@/components/Demo.vue";
import ButtonDemo1 from "./ButtonDemo1.demo.vue";
import ButtonDemo2 from "./ButtonDemo2.demo.vue";
import ButtonDemo3 from "./ButtonDemo3.demo.vue";
import ButtonDemo4 from "./ButtonDemo4.demo.vue";
import ButtonDemo5 from "./ButtonDemo5.demo.vue";
import ButtonDemo6 from "./ButtonDemo6.demo.vue";
</script>

<style lang="scss">
.button-doc-wrapper {
  .jw-button + .jw-button {
    margin-left: 8px;
    margin-top: 8px;
  }
}
</style>
