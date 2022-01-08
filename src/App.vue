<script setup>
import { ref, provide } from "vue";

const asideVisible = ref(false);
provide("asideVisible", asideVisible);
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
