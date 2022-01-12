<demo>
基础用法
</demo>
<template>
  <jw-switch v-model="checked" />
  <jw-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
