import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/doc", component: Doc },
  ],
});

export default router;
