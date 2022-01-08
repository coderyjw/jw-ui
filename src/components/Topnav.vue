<script setup lang="ts">
import { type Ref, inject } from "vue";

const asideVisible = inject<Ref<boolean>>("asideVisible");

const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
</script>
<template>
  <div class="topnav">
    <img
      class="toggle-aside"
      src="@/assets/svg/列表.svg"
      @click="toggleAside"
    />
    <div class="logo">
      <!-- <img src="" alt="" /> -->
      <span>JW UI</span>
    </div>
    <div class="menu">
      <router-link exact to="/home">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/coderyjw/jw-ui" target="_blank">GitHub</a>
      <span>1.0.0</span>
    </div>
  </div>
</template>

<style lang="scss">
.topnav {
  height: 63px;
  background-color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .logo {
    height: 28px;

    span {
      color: rgb(31, 34, 37);
      cursor: pointer;
      font-size: 18px;
      line-height: 28px;
      height: 28px;
    }
    &:hover {
      border-bottom: none;
    }
  }

  .menu {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }

    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }

  .toggle-aside {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>
