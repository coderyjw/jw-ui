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
};

export const inputEmit = ["update:modelValue", "input"];

export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);
  const placeholder = computed(() => props.placeholder);
  const clearable = computed(() => props.clearable);

  const showPassword = computed(() => props.showPassword);
  const passwordVisible = ref(false);

  const type = computed(() => {
    return showPassword.value
      ? passwordVisible.value
        ? "text"
        : "password"
      : props.type;
  });
  console.log(type.value, placeholder.value);

  const classes = computed(() => ({
    "is-disabled": disabled.value,
    "is-clearable": clearable.value,
    "show-password": showPassword.value,
    "jw-input": type.value !== 'textarea',
    "jw-textarea": type.value === 'textarea',
  }));

  return {
    disabled,
    classes,
    clearable,
    showPassword,
    type,
    passwordVisible,
    placeholder,
  };
};
