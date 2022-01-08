<template>
  <div>
    <button :class="{ checked }" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked = ref(false);
const toggle = () => {
  checked.value = !checked.value;
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #dbdbdb;
  border-radius: calc($h2 / 1.5);
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 1.5);
  }

  &.checked {
    background: #18a058;
    > span {
      left: calc(100% - $h2 - 2px);
    }
  }
}
</style>
