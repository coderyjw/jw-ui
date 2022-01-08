<template>
  <div>
    <Switch v-model="checked" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch/index.vue";

const checked = ref(false);
</script>

<style scoped></style>
