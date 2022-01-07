import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import My from "../components/My.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/my", component: My },
  ],
});

export default router;
