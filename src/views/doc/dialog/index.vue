<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="DialogDemo1Vue" />
  <Demo :component="DialogDemo2Vue" />
</template>

<script setup lang="ts">
import Demo from "@/components/Demo.vue";
import DialogDemo1Vue from "./DialogDemo1.demo.vue";
import DialogDemo2Vue from "./DialogDemo2.demo.vue";
</script>

<style scoped></style>
