<template>
  <div class="jw-alert" :class="classes">
    <div class="jw-alert-body">
      <div class="jw-alert-body-title">{{ title }}</div>
      <div class="jw-alert-body-content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "default",
  },
  closable: {
    type: Boolean,
    default: true,
  },
  showIcon: Boolean,
  center: Boolean,
});

const classes = computed(() => ({
  [`jw-alert-${props.type}`]: props.type,
}));
</script>
<script lang="ts">
export default {
  name: "JwAlert",
};
</script>

<style lang="scss">
.jw-alert {
  width: 100%;
  line-height: 1.6;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  .jw-alert-body {
    .jw-alert-body-title {
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: rgb(31, 34, 37);
    }
  }

  &.jw-alert-default {
    background-color: #fafafc;
    border: 1px solid #efeff4;
  }

  &.jw-alert-info {
    background-color: #eef5fd;
    border: 1px solid #ccdef8;
  }

  &.jw-alert-success {
    background-color: #eff7f2;
    border: 1px solid #cce6d6;
  }

  &.jw-alert-warning {
    background-color: #fdf7ee;
    border: 1px solid #f6e1ba;
  }

  &.jw-alert-error {
    background-color: #f9eef1;
    border: 1px solid #edccd3;
  }
}
</style>
