<template>
  <div class="jw-gradient-text" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});

const classes = computed(() => ({
  [`is-${props.type}`]: props.type,
}));
</script>
<script lang="ts">
export default {
  name: "JwGradientText",
};
</script>

<style lang="scss">
$error-start-color: rgba(208, 48, 80, 0.6);
$error-end-color: #d03050;
$info-start-color: rgba(32, 128, 240, 0.6);
$info-end-color: #2080f0;
$success-start-color: rgba(24, 160, 88, 0.6);
$success-end-color: #18a058;
$warning-start-color: rgba(240, 160, 32, 0.6);
$warning-end-color: #f0a020;

.jw-gradient-text {
  display: inline-block;
  color: #0000;
  font-weight: 500;
  white-space: nowrap;
  -webkit-background-clip: text;
  background-clip: text;
  color: #0000;
  white-space: nowrap;

  &.is-error {
    background-image: linear-gradient(
      252deg,
      $error-start-color 0%,
      $error-end-color 100%
    );
  }
  &.is-info {
    background-image: linear-gradient(
      252deg,
      $info-start-color 0%,
      $info-end-color 100%
    );
  }
  &.is-warning {
    background-image: linear-gradient(
      252deg,
      $warning-start-color 0%,
      $warning-end-color 100%
    );
  }
  &.is-success {
    background-image: linear-gradient(
      252deg,
      $success-start-color 0%,
      $success-end-color 100%
    );
  }
}
</style>
