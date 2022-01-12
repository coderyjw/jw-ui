<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="TabsDemo1" />
  <Demo :component="TabsDemo2" />
</template>

<script setup lang="ts">
import Demo from "@/components/Demo.vue";
import TabsDemo1 from "./TabsDemo1.demo.vue";
import TabsDemo2 from "./TabsDemo2.demo.vue";
</script>
<style scoped></style>
