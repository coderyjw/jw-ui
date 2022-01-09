import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import Switch from "@/components/SwitchDemo.vue";
import Button from "@/components/ButtonDemo.vue";
import Dialog from "@/components/DialogDemo.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Switch,
        },
      ],
    },
  ],
});

export default router;
