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
};

export const inputEmit = ["update:modelValue", "input"];

export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);
  const classes = computed(() => ({
    "is-disabled": disabled.value,
  }));
  console.log(classes);

  return {
    disabled,
    classes,
  };
};
