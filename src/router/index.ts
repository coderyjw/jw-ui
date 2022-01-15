import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";


const history = createWebHashHistory();
import docRoutes from "./doc-routes";

let docRoutes1 = [];
for (let i in docRoutes) {
  docRoutes1 = [...docRoutes1, ...docRoutes[i]];
}
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      redirect: "/doc/intro",
      component: Doc,
      children: [
        ...docRoutes1,
      ],
    },
  ],
});

export default router;
