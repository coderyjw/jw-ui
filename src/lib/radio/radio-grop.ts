export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
  disabled: Boolean,
  size: String,
  border: Boolean,
};

export const radioGroupEmits = ["update:modelValue", "change"];
