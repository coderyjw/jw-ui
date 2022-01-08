<template>
  <div>
    <button :class="{ checked: value }" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['input'])

const checked = ref(false);
const toggle = () => {
  emit('input', !props.value)
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
    transition: all 250ms;
  }

  &.checked {
    background: #18a058;
    > span {
      left: calc(100% - $h2 - 2px);
    }
  }

  &:focus { outline: none; }
}
</style>
