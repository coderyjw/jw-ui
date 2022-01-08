<template>
  <div>
    <Switch v-model="checked" active-color="red" inactive-color="pink" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch/index.vue";

const checked = ref(false);
</script>

<style scoped></style>
