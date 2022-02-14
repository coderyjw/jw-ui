import { computed, ref } from "vue";

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
  showPassword: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  suffixIcon: {
    type: [String, Object],
  },
  prefixIcon: {
    type: [String, Object],
  },
  readonly: {
    type: Boolean,
    default: false,
  },
};

export const inputEmit = [
  "update:modelValue",
  "input",
  "clear",
  "blur",
  "focus",
];

export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);
  const placeholder = computed(() => props.placeholder);
  const clearable = computed(() => props.clearable);

  const showPassword = computed(() => props.showPassword);
  const passwordVisible = ref(false);
  const readonly = computed(() => props.readonly);

  const type = computed(() => {
    return showPassword.value
      ? passwordVisible.value
        ? "text"
        : "password"
      : props.type;
  });

  const classes = computed(() => ({
    "is-disabled": disabled.value,
    "is-clearable": clearable.value,
    "show-password": showPassword.value,
    "jw-input": type.value !== "textarea",
    "jw-textarea": type.value === "textarea",
    "jw-input-suffix":
      showPassword.value || clearable.value || props.suffixIcon,
    "jw-input-prefix": props.prefixIcon,
  }));

  const nativeInputValue = computed(() =>
    props.modelValue === null || props.modelValue === undefined
      ? ""
      : String(props.modelValue)
  );
  return {
    disabled,
    classes,
    clearable,
    showPassword,
    type,
    passwordVisible,
    placeholder,
    suffixIcon: props.suffixIcon,
    prefixIcon: props.prefixIcon,
    readonly,
    nativeInputValue,
  };
};
