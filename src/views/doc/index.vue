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
      <transition name="fade" v-show="asideVisible">
        <aside>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
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
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
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
  overflow: none;
  padding: 16px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  width: 0;
  padding: 0;
}
</style>
