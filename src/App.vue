<script setup>
import { ref, provide } from "vue";

const width = document.documentElement.clientWidth;
const asideVisible = ref(width <= 500 ? false : true);
provide("asideVisible", asideVisible);
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
