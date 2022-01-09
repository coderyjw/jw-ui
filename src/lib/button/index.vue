<template>
  <button class="jw-button" :class="classes">
    <span v-if="loading" class="jw-loadingIndicator"></span>
    <slot> {{ theme }} </slot>
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
const props = defineProps({
  theme: {
    type: String,
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const { theme, dashed, size, round, disabled } = props;
const classes = computed(() => {
  return {
    [`jw-theme-${theme}`]: theme,
    [`jw-theme-dashed`]: dashed,
    [`jw-size-${size}`]: size,
    [`is-round`]: round,
    [`is-disabled`]: disabled,
  };
});
</script>

<style lang="scss" scoped>
$h-default: 32px;
$h-small: 20px;
$h-large: 48px;
$white: #fff;
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;
$grey: grey;

$default-border-color: #d9d9d9;

$radius: 3px;
$green: #18a058;

.jw-button {
  box-sizing: border-box;
  height: $h-default;
  background-color: #fff;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  color: $default-color;
  border: 1px solid $default-border-color;
  user-select: none;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.jw-size-large {
    font-size: 24px;
    height: $h-large;
    padding: 0 16px;
  }
  &.jw-size-small {
    font-size: 12px;
    height: $h-small;
    padding: 0 8px;
  }

  &.is-round.jw-size-default {
    border-radius: calc($h-default / 2);
  }
  &.is-round.jw-size-large {
    border-radius: calc($h-large / 2);
  }
  &.is-round.jw-size-small {
    border-radius: calc($h-small / 2);
  }

  &.jw-theme-default {
    &:hover {
      color: $green;
      border-color: $green;

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: $green $green $green transparent;
      }
    }
    &:active {
      color: darken($green, 20%);
      border-color: darken($green, 20%);

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: darken($green, 20%) darken($green, 20%)
          darken($green, 20%) transparent;
      }
    }
    > .jw-loadingIndicator {
      border-style: dashed;
      border-color: $default-color $default-color $default-color transparent;
    }
  }
  &.jw-theme-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;

    &:hover {
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
    }
    &:active {
      background-color: darken($primary-color, 20%);
      border-color: darken($primary-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
      &:hover {
        background: lighten($primary-color, 20%);
        border-color: lighten($primary-color, 20%);
      }
    }

    &.jw-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $primary-color;

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: $primary-color $primary-color $primary-color transparent;
      }
    }
  }

  &.jw-theme-info {
    background-color: $info-color;
    border-color: $info-color;
    color: $white;
    &:hover {
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
    }
    &:active {
      background-color: darken($info-color, 20%);
      border-color: darken($info-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
      &:hover {
        background: lighten($info-color, 20%);
        border-color: lighten($info-color, 20%);
      }
    }

    &.jw-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $info-color;

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: $info-color $info-color $info-color transparent;
      }
    }
  }

  &.jw-theme-success {
    background-color: $success-color;
    border-color: $success-color;
    color: $white;
    &:hover {
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
    }
    &:active {
      background-color: darken($success-color, 20%);
      border-color: darken($success-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
      &:hover {
        background: lighten($success-color, 20%);
        border-color: lighten($success-color, 20%);
      }
    }

    &.jw-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $success-color;

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: $success-color $success-color $success-color transparent;
      }
    }
  }

  &.jw-theme-warning {
    background-color: $warning-color;
    border-color: $warning-color;
    color: $white;
    &:hover {
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
    }
    &:active {
      background-color: darken($warning-color, 20%);
      border-color: darken($warning-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
      &:hover {
        background: lighten($warning-color, 20%);
        border-color: lighten($warning-color, 20%);
      }
    }

    &.jw-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $warning-color;

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: $warning-color $warning-color $warning-color transparent;
      }
    }
  }

  &.jw-theme-error {
    background-color: $error-color;
    border-color: $error-color;
    color: $white;
    &:hover {
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
    }
    &:active {
      background-color: darken($error-color, 20%);
      border-color: darken($error-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
      &:hover {
        background: lighten($error-color, 20%);
        border-color: lighten($error-color, 20%);
      }
    }

    &.jw-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $error-color;

      > .jw-loadingIndicator {
        border-style: dashed;
        border-color: $error-color $error-color $error-color transparent;
      }
    }
  }

  > .jw-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $white $white $white transparent;
    border-style: solid;
    border-width: 2px;
    animation: jw-spin 1s infinite linear;
  }
}

@keyframes jw-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
