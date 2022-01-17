<template>
  <a class="jw-link" :class="classes">
    <jw-icon
      v-if="icon && iconPlacement === 'left'"
      :size="iconSize"
      class="jw-icon-left"
    >
      <component :is="icon" />
    </jw-icon>
    <slot></slot>
    <jw-icon
      v-if="icon && iconPlacement === 'right'"
      :size="iconSize"
      class="jw-icon-right"
    >
      <component :is="icon" />
    </jw-icon>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    deafult: false,
  },
  icon: {
    type: [String, Object],
  },
  iconPlacement: {
    type: String,
    default: "left",
  },
  iconSize: {
    type: [Number, String],
    default: "18px",
  },
});

const { type, underline, disabled } = props;

const classes = computed(() => {
  return {
    [`jw-link-${type}`]: type,
    ["jw-link-underline"]: underline,
    ["jw-link-disabled"]: disabled,
  };
});
</script>
<script lang="ts">
export default {
  name: "JwLink",
};
</script>

<style lang="scss">
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;

$font-size: 16px;
.jw-link {
  font-size: $font-size;
  position: relative;
  display: flex;
  align-items: center;
  height: calc($font-size + 5px);
  > span {
    padding-bottom: 5px;
  }

  &.jw-link-default {
    color: $default-color;
    &:hover {
      color: $primary-color;
    }
    &.jw-link-underline:hover:after {
      border-bottom: 1px solid $primary-color;
    }

    &.jw-link-disabled {
      color: lighten($default-color, 50%);

      &.jw-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.jw-link-primary {
    color: $primary-color;
    &:hover {
      color: lighten($primary-color, 20%);
    }
    &.jw-link-underline:hover:after {
      border-bottom: 1px solid lighten($primary-color, 20%);
    }

    &.jw-link-disabled {
      color: lighten($primary-color, 30%);

      &.jw-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.jw-link-info {
    color: $info-color;
    &:hover {
      color: lighten($info-color, 20%);
    }
    &.jw-link-underline:hover:after {
      border-bottom: 1px solid lighten($info-color, 20%);
    }

    &.jw-link-disabled {
      color: lighten($info-color, 20%);

      &.jw-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.jw-link-success {
    color: $success-color;
    &:hover {
      color: lighten($success-color, 20%);
    }
    &.jw-link-underline:hover:after {
      border-bottom: 1px solid lighten($success-color, 20%);
    }

    &.jw-link-disabled {
      color: lighten($success-color, 20%);

      &.jw-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.jw-link-warning {
    color: $warning-color;
    &:hover {
      color: lighten($warning-color, 20%);
    }
    &.jw-link-underline:hover:after {
      border-bottom: 1px solid lighten($warning-color, 20%);
    }

    &.jw-link-disabled {
      color: lighten($warning-color, 20%);

      &.jw-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.jw-link-error {
    color: $error-color;
    &:hover {
      color: lighten($error-color, 20%);
    }
    &.jw-link-underline:hover:after {
      border-bottom: 1px solid lighten($error-color, 20%);
    }

    &.jw-link-disabled {
      color: lighten($error-color, 30%);

      &.jw-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.jw-link-underline:hover:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
  }

  &.jw-link-disabled {
    cursor: not-allowed;
  }

  .jw-icon-right {
    margin-left: 5px;
  }

  .jw-icon-left {
    margin-right: 5px;
  }
}
</style>
