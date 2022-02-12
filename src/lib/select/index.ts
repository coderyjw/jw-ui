import { computed } from "vue";

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object],
  },
  options: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export const selectEmits = ["update:modelValue", "change"];

export const useSelect = (props, emits) => {
  const options = computed(() => props.options);

  const modelValue = computed(() => props.modelValue);

  const modelLable = computed(() => {
    const item = props.options.find((v) => v.value === props.modelValue);
    return item ? item.label : "";
  });

  const disabled = computed(() => props.disabled);

  return {
    options,
    modelValue,
    modelLable,
    disabled,
  };
};
