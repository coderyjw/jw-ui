<template>
  <div class="jw-divider">
    <div class="jw-divider-line"></div>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: "JwDivider",
};
</script>

<style lang="scss">
.jw-divider {
  margin: 24px 0;
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  color: rgb(31, 34, 37);
  .jw-divider-line {
    background-color: rgb(239, 239, 245);
    height: 1px;
    border: none;
    width: 100%;
  }
}
</style>
