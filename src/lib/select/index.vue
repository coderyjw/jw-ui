<template>
  <div class="jw-select">
    <jw-input readonly v-model="modelLable" :suffix-icon="IosArrowDown" />
    <div class="jw-select-dropdown">
      <div class="no-options" v-show="options.length === 0">无选项</div>
      <span
        class="jw-select-option"
        :class="{ 'is-active': modelValue === item.value }"
        v-for="item in options"
        :key="item.value"
        @click="handleOptionClick(item)"
        >{{ item.label }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { IosArrowDown } from "@vicons/ionicons4";
import { selectProps, selectEmits, useSelect } from "./index.ts";
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

const { options, modelValue, modelLable } = useSelect(props, emits);

const handleOptionClick = (item) => {
  emits("update:modelValue", item.value);
};
console.log(options, modelValue);
</script>

<script lang="ts">
export default {
  name: "JwSelect",
};
</script>
<style lang="scss">
.jw-select {
  width: 100%;
  position: relative;

  .jw-select-dropdown {
    position: absolute;
    border-radius: 3px;
    padding: 0;
    top: 48px;
    width: 100%;
    opacity: 0;
    height: 200px;
    width: 80%;

    /* opacity: 1;
    height: 300px;
    width: 100%; */
    background-color: #fff;
    transition: all 250ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    overflow: auto;

    .no-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .jw-select-option {
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      width: auto;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      overflow: visible;
      background-color: #fff;

      &:hover,
      &.is-active {
        background-color: #f3f3f5;
        color: #25a561;
      }
    }
  }

  &:focus-within .jw-select-dropdown {
    opacity: 1;
    height: 300px;
    width: 100%;
  }
}
</style>
