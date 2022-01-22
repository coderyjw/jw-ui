<preview>单选框组</preview>
<template>
  <jw-radio-group v-model="radio" size="large">
    <jw-radio label="1">选项 A</jw-radio>
    <jw-radio label="2">选项 B</jw-radio>
    <jw-radio label="3" disabled>选项 C</jw-radio>
  </jw-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const radio = ref("1");

</script>
