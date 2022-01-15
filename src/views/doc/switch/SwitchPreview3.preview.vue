<preview>
尺寸
</preview>
<template>
  <jw-switch v-model="checked" size="small" />
  <jw-switch v-model="checked" size="default" />
  <jw-switch v-model="checked" size="large" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
