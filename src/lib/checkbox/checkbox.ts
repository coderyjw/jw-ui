import { computed } from "vue";
export const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  iconSize: {
    type: [String, Number],
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  }
};

export const checkboxEmits = ["update:modelValue"];

export const useCheckbox = (props, emits) => {
  const label = computed(() => props.label);
  const modelValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emits("update:modelValue", value);
    },
  });

  const size = computed(() => props.size);

  const iconSize = computed(() => {
    if (props.iconSize) {
      return props.iconSize;
    } else if (size.value === "large") {
      return "12px";
    } else if (size.value === "small") {
      return "8px";
    } else {
      return "10px";
    }
  });

  const disabled = computed(() => {
    return props.disabled;
  });

  const iconColor = computed(() => {
    if(disabled.value) {
      return '#c2c2c2'
    } else {
      return '#fff'
    }
  })
  const classes = computed(() => ({
    "is-checked": modelValue.value,
    [`jw-checkbox-${size.value}`]: size.value,
    "is-disabled": disabled.value
  }));

  return {
    modelValue,
    label,
    classes,
    size,
    iconSize,
    disabled,
    iconColor
  };
};
