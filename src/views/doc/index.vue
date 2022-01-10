<script setup lang="ts">
import Topnav from "@/components/Topnav.vue";
import { inject, type Ref } from "vue";

const asideVisible = inject<Ref<boolean>>("asideVisible");
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
</script>
<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <transition name="fade">
        <aside v-show="asideVisible">
          <div class="menu">
            <div class="menu-group">
              <span class="menu-group-title text-overflow"> 文档 </span>
              <router-link class="menu-item text-overflow" to="/doc/intro"
                >介绍</router-link
              >
              <router-link class="menu-item text-overflow" to="/doc/install"
                >安装</router-link
              >
              <router-link class="menu-item text-overflow" to="/doc/get-started"
                >开始使用</router-link
              >
            </div>
            <div class="menu-group">
              <span class="menu-group-title text-overflow"> 通用组件 (4) </span>
              <router-link class="menu-item text-overflow" to="/doc/switch"
                >Switch 组件</router-link
              >
              <router-link class="menu-item text-overflow" to="/doc/button"
                >Button 组件</router-link
              >
              <router-link class="menu-item text-overflow" to="/doc/dialog"
                >Dialog 组件</router-link
              >
              <router-link class="menu-item text-overflow" to="/doc/tabs"
                >Tabs 组件</router-link
              >
            </div>
          </div>
        </aside>
      </transition>
      <div
        class="toggle-button"
        @click="toggleAside"
        :style="{
          left: asideVisible ? '272px' : '0px',
          transform: asideVisible
            ? 'rotate(180deg) translateX(50%)'
            : 'rotate(0deg) translateX(50%)',
        }"
      >
        <img src="@/assets/svg/箭头 右.svg" alt="" />
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    position: absolute;
    top: 63px;
    left: 0px;
    height: calc(100% - 63px);
    width: 100%;
  }
}
.content {
  display: flex;
  transition: all 0.5 ease;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    box-sizing: border-box;
    padding: 32px 24px 56px 56px;
  }
}
aside {
  width: 272px;
  padding: 16px;
  background-color: #fff;
  border-right: 1px solid #efeff5;

  .menu,
  .menu-group {
    width: 100%;
  }

  .menu-group-title,
  .menu-item {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .menu-group-title {
    height: 36px;
    padding-left: 32px;
    font-size: 13px;
    color: rgb(118, 124, 130);
    overflow: hidden;

    &:hover {
      cursor: default;
    }
  }

  .menu-item {
    height: 44px;
    padding-left: 48px;
    color: rgb(51, 54, 57);
    font-size: 14px;

    &:hover {
      color: #18a058 !important;
    }
  }

  .router-link-exact-active {
    color: #18a058 !important;
    background-color: #e7f5ee;
    border-radius: 3px;
  }
}

.toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  left: 272px;
  top: 240px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 0.5s ease, transform 0.1s ease;

  > img {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 500px) {
    display: none;
  }
}

main {
  transition: all 0.5 ease;
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  width: 0;
  padding: 0;
}

.fade-leave-from {
  width: 272px;
  padding: 16px;
}
</style>
