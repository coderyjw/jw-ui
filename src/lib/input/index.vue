<template>
  <div class="jw-input">
    <input
      type="text"
      class="jw-input-inner"
      autocomplete="off"
      :value="nativeInputValue"
      @input="handleChange"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type TargetElement = HTMLInputElement | HTMLTextAreaElement;
const props = defineProps({
  modelValue: {
    type: [Number, String],
  },
  placeholder: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue", "input"]);

const nativeInputValue = computed(() =>
  props.modelValue === null || props.modelValue === undefined
    ? ""
    : String(props.modelValue)
);

const handleChange = (e: Event) => {
  const { value } = e.target as TargetElement;
  if (value === nativeInputValue.value) return;

  emit("update:modelValue", value);
  emit("input", value);
};
</script>
<script lang="ts">
export default {
  name: "JwInput",
};
</script>

<style lang="scss">
$active-color: #18a058;
.jw-input {
  width: 180px;
  cursor: pointer;

  &-inner {
    cursor: pointer;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      /* border-color: $active-color; */
      border-color: #c0c4cc;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: $active-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }

    &::placeholder {
      color: rgb(213, 215, 220);
      font-size: inherit;
    }
  }
}
</style>
