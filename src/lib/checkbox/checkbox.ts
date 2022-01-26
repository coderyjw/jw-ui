import { computed, inject } from "vue";
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
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
};

export const checkboxEmits = ["update:modelValue", "change"];

export const useCheckbox = (props, emits) => {
  const checkboxGroupProps = inject("checkboxGroupKey", undefined);
  const isGroup = computed(() => !!checkboxGroupProps);

  const label = computed(() => props.label);
  const modelValue = computed<String[] | Boolean>({
    get() {
      return isGroup.value ? checkboxGroupProps.modelValue : props.modelValue;
    },
    set(value) {
      if (isGroup.value) {
        checkboxGroupProps.changeEvent(value);
      } else {
        emits("update:modelValue", value);
        emits("change", value);
      }
    },
  });

  const size = computed(() =>
    props.size ? props.size : checkboxGroupProps?.size
  );

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

  const disabled = computed(
    () => props.disabled || checkboxGroupProps?.disabled
  );

  const iconColor = computed(() => {
    if (disabled.value) {
      if (!isGroup.value) {
        return modelValue.value ? "#c2c2c2" : "#fff";
      } else {
        return modelValue.value.indexOf(label.value) > -1 ? "#c2c2c2" : "#fff";
      }
    } else {
      return "#fff";
    }
  });

  const indeterminate = computed(() => props.indeterminate);
  const border = computed(() => props.border);
  const classes = computed(() => ({
    "is-checked": isGroup.value
      ? modelValue.value.indexOf(label.value) > -1 && !indeterminate.value
      : modelValue.value && !indeterminate.value,
    [`jw-checkbox-${size.value}`]: size.value,
    "is-disabled": disabled.value,
    "is-indeterminate": indeterminate.value,
    "is-border": border.value,
  }));
  return {
    modelValue,
    label,
    classes,
    size,
    iconSize,
    disabled,
    iconColor,
    isGroup,
    indeterminate,
    border,
  };
};
