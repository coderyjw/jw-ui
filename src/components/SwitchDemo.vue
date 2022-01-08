<template>
  <div>
    <Switch :value="checked" @input="checked = $event" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch/index.vue";

const checked = ref(false);
</script>

<style scoped></style>
