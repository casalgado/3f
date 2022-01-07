import { createRouter, createWebHistory } from "vue-router";
import TheLanding from "../views/TheLanding.vue";
import MainSection from "../views/MainSection.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: TheLanding,
  },
  {
    path: "/main",
    name: "Main",
    component: MainSection,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
