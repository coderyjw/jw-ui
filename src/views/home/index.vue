<template>
  <div class="topnavAndBanner">
    <Topnav :toggleMenuButton="false" />
    <div class="banner">
      <h1>JW UI</h1>
      <p>一个 Vue 3 组件库</p>
      <p>有点儿意思~</p>
      <div class="actions">
        <jw-button @click="linkTo('github')">GitHub</jw-button>
        <jw-button @click="linkTo('getStart')" theme="primary"
          >快速使用</jw-button
        >
      </div>
    </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Topnav from "@/components/Topnav.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const linkTo = (params) => {
  if (params === "github") {
    window.open("https://github.com/coderyjw/jw-ui", "_blank");
  } else if (params === "getStart") {
    router.push({
      path: "/doc",
    });
  }
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 170px 0 0;
  @media (max-width: 500px) {
    padding: 120px 0 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: rgb(44, 62, 80);
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
    margin-bottom: 18px;
    font-family: Metropolis, sans-serif;
    text-size-adjust: 100%;
    position: relative;

    &:hover::before {
      content: " ";
      position: absolute;
      top: 10px;
      left: 20%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgb(44, 62, 80);
    }
    &:hover::after {
      content: " ";
      position: absolute;
      top: 10px;
      left: 39%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgb(44, 62, 80);
    }
  }

  p {
    color: rgb(51, 54, 57);
    font-size: 16px;
    height: 25px;
    line-height: 25px;
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  > .actions {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .jw-button {
      height: 40px;
      padding: 0 18px;
    }
    .jw-button:last-of-type {
      margin-left: 20px;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  border-top: 1px solid rgb(234, 236, 239);
  padding-top: 20px;
  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      padding: 0 30px;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>
