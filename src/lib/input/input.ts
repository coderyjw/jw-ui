import { computed } from "vue";

export const inputProps = {
  modelValue: {
    type: [Number, String],
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
};

export const inputEmit = ["update:modelValue", "input"];

export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);

  const clearable = computed(() => props.clearable);

  const classes = computed(() => ({
    "is-disabled": disabled.value,
    "is-clearable": clearable.value
  }));

  return {
    disabled,
    classes,
    clearable
  };
};
