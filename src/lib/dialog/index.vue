<template>
  <template v-if="modelValue">
    <Teleport to="body">
      <div
        class="jw-dialog-overlay"
        v-if="overlay"
        @click="onOverlayClick"
      ></div>
      <div class="jw-dialog">
        <div class="jw-dialog-wrapper">
          <header>
            <slot name="title">{{ title }}</slot>
            <span class="jw-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot>
              <p>这是一条消息</p>
            </slot>
          </main>
          <footer>
            <slot name="footer">
              <jw-button @click="cancel">取消</jw-button>
              <jw-button theme="primary" @click="confirm">确认</jw-button>
            </slot>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import JwButton from "@/lib/button/index.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: true,
    default: true,
  },
  title: {
    type: String,
    default: "标题",
  },
  overlayClosable: {
    type: Boolean,
    default: true,
  },
  confirm: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
});

const emit = defineEmits(["update:modelValue", "onOverlayClick"]);

const close = () => {
  emit("update:modelValue", false);
};

const onOverlayClick = () => {
  if (props.overlayClosable) {
    close();
  }
  emit("onOverlayClick");
};

const confirm = () => {
  if (props.confirm?.() !== false) {
    close();
  }
};

const cancel = () => {
  if (props.cancel?.() !== false) {
    close();
  }
};
</script>
<script lang="ts">
export default {
  name: "JwDialog",
};
</script>

<style lang="scss">
$radius: 3px;
$border-color: #d9d9d9;
$primary-color: #36ad6a;

.jw-dialog {
  box-sizing: border-box;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);

  &-overlay {
    background-color: #00000080;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    max-width: calc(100vw - 32px);
    width: 446px;
    background: white;

    > header {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }
    > main {
      padding: 30px 20px;
    }
    > footer {
      padding: 20px;
      text-align: right;

      .jw-button + .jw-button {
        margin-left: 12px;
      }
    }
    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:hover::before,
      &:hover:after {
        background: $primary-color;
      }
    }
  }
}
</style>
