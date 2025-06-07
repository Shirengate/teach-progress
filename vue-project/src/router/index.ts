import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePage from "@/components/HomePage/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
