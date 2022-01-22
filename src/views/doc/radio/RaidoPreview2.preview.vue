<preview>禁用状态</preview>
<template>
  <jw-radio v-model="radio" label="1" disabled>选项1</jw-radio>
  <jw-radio v-model="radio" label="2" disabled>选项2</jw-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";

const radio = ref("1");
</script>
