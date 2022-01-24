<template>
  <label
    class="jw-checkbox"
    :class="classes"
    @click="handleChange"
    tabindex="0"
  >
    <span class="jw-checkbox-input" :class="classes">
      <jw-icon :color="iconColor" :size="iconSize">
        <Subtract12Filled v-if="indeterminate" />
        <Check v-else />
      </jw-icon>
    </span>
    <span class="jw-checkbox-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { Check } from "@vicons/fa";
import { Subtract12Filled } from "@vicons/fluent";
import { checkboxProps, checkboxEmits, useCheckbox } from "./checkbox";

const props = defineProps(checkboxProps);
const emits = defineEmits(checkboxEmits);

const {
  modelValue,
  label,
  classes,
  iconSize,
  disabled,
  iconColor,
  isGroup,
  indeterminate,
} = useCheckbox(props, emits);
const handleChange = () => {
  if (!disabled.value) {
    if (isGroup.value) {
      const index = modelValue.value.indexOf(label.value);
      if (index > -1) {
        modelValue.value.splice(index, 1);
      } else {
        modelValue.value.push(label.value);
      }
      modelValue.value = [...modelValue.value];
    } else {
      modelValue.value = !modelValue.value;
    }
  }
};
</script>

<script lang="ts">
export default {
  name: "JwCheckbox",
};
</script>

<style lang="scss">
$primary-color: #4b9e5f;

$large-size: 16px;
$default-size: 14px;
$small-size: 12px;

$large-height: 40px;
$default-height: 32px;
$small-height: 24px;

.jw-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: $default-height;

  &.is-disabled {
    cursor: not-allowed;
  }

  &.jw-checkbox-large {
    height: $large-height;
  }

  &.jw-checkbox-small {
    height: $small-height;
  }

  &:not(.is-disabled):hover .jw-checkbox-input {
    border: 1px solid #4b9e5f;
  }
  &:not(.is-disabled):focus .jw-checkbox-input {
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    border: 1px solid #4b9e5f;
  }

  &.is-border {
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    padding: 0 8px;

    &.is-checked:not(.is-disabled),
    &.is-indeterminate:not(.is-disabled) {
      color: $primary-color;
      border: 1px solid #18a058;
    }

    &.jw-checkbox-large {
      padding: 0 12px;
    }

    &.jw-checkbox-small {
      padding: 0 8px;
    }
  }

  > .jw-checkbox-input {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $default-size;
    height: $default-size;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid rgb(224, 224, 230);

    &.is-checked {
      background-color: $primary-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
      border: 1px solid #18a058;
      transition: all 0.3s ease-in-out;
    }

    &.jw-checkbox-large {
      width: $large-size;
      height: $large-size;
    }

    &.jw-checkbox-small {
      width: $small-size;
      height: $small-size;
    }

    &.is-disabled {
      border: 1px solid rgb(224, 224, 230);
      box-shadow: none;
      background: #fafafc;
    }

    &.is-indeterminate {
      background-color: $primary-color;
      border: 1px solid #18a058;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }
  }
  > .jw-checkbox-label {
    padding: 0 10px;
    user-select: none;
    color: rgb(51, 54, 57);
    font-size: $default-size;

    &.jw-checkbox-large {
      font-size: $large-size;
    }

    &.jw-checkbox-small {
      font-size: $small-size;
    }

    &.is-disabled {
      color: #c2c2c2ff;
    }
  }
}
</style>
