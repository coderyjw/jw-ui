export const checkboxGroupProps = {
  modelValue: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export const checkboxGroupEmits = ["update:modelValue", "change"];
