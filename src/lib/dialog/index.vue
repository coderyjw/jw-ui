<template>
  <div class="jw-dialog-overlay"></div>
  <div class="jw-dialog-wrapper">
    <div class="jw-dialog">
      <header>标题<span class="jw-dialog-close"></span></header>
      <main>
        <p>这是一条消息</p>
      </main>
      <footer>
        <Button>Cancel</Button>
        <Button theme="primary">Primary</Button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/button/index";
</script>

<style lang="scss">
$radius: 3px;
$border-color: #d9d9d9;
$primary-color: #36ad6a;

.jw-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 30em;
  max-width: 90%;

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
  }

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
</style>
