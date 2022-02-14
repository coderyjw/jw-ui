<template>
  <div class="jw-divider">
    <div class="jw-divider-line" />

    <div class="jw-divider-title" :class="classes">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  titlePlacement: {
    type: String,
    default: "left",
  },
});

const classes = computed(() => ({
  "is-left": props.titlePlacement === "left",
  "is-right": props.titlePlacement === "right",
  "is-center": props.titlePlacement === "center",
}));
</script>
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
    position: absolute;
  }

  .jw-divider-title {
    position: absolute;
    top: 0;
    font-size: 16px;
    font-weight: 500;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 0 20px;

    &.is-left {
      left: 20px;
    }
    &.is-right {
      right: 20px;
    }
    &.is-center {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>
