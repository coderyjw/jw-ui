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
  placeholder: {
    type: String,
    default: "请选择",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
};

export const selectEmits = ["update:modelValue", "change", "clear"];

export const useSelect = (props, emits) => {
  const options = computed(() => props.options);

  const modelValue = computed(() => props.modelValue);

  const modelLable = computed({
    get() {
      const item = props.options.find((v) => v.value === props.modelValue);
      return item ? item.label : "";
    },
    set() {},
  });

  const disabled = computed(() => props.disabled);

  const placeholder = computed(() => props.placeholder);

  const clearable = computed(() => props.clearable);

  return {
    options,
    modelValue,
    modelLable,
    disabled,
    placeholder,
    clearable,
  };
};
