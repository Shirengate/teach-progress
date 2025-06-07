import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePageVue from "@/views/HomePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home-page",
    component: HomePageVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
