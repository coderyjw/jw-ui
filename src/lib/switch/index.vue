<template>
  <div>
    <button
      :class="{ checked: modelValue }"
      @click="toggle"
      :style="{ background: modelValue ? inactiveColor : activeColor }"
    >
      <span></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: "#18a058",
  },
  inactiveColor: {
    type: String,
    default: "#dbdbdb",
  },
});

console.log({ props });
const emit = defineEmits(["update:modelValue"]);

const checked = ref(false);
const toggle = () => {
  emit("update:modelValue", !props.modelValue);
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
  /* 解决移动端点击时有边框 */
  outline: none;
  -webkit-tap-highlight-color: #fff;
  -webkit-tap-highlight-color: transparent;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 1.5);
    transition: all 250ms;
  }

  &.checked {
    background: #18a058;
    > span {
      left: calc(100% - $h2 - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
