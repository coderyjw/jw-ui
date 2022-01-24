<template>
  <label class="jw-checkbox">
    <span class="jw-checkbox-input"> </span>
    <span class="jw-checkox-label">
      <slot>选项 A</slot>
    </span>
  </label>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "JwCheckbox",
};
</script>

<style scoped></style>
