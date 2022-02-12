import { computed } from "vue";

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object],
  },
  options: {
    type: Array,
    default: () => [],
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
  return {
    options,
    modelValue,
    modelLable,
  };
};
