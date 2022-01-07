import { createRouter, createWebHistory } from "vue-router";
import TheLanding from "../views/TheLanding.vue";
import MainSection from "../views/MainSection.vue";
import { restaurant } from "../storage/restaurant";
import { market } from "../storage/market";
import { catering } from "../storage/catering";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: TheLanding,
  },
  {
    path: "/restaurante",
    name: "Restaurant",
    component: MainSection,
    props: { content: restaurant },
  },
  {
    path: "/mercado",
    name: "Market",
    component: MainSection,
    props: { content: market },
  },
  {
    path: "/catering",
    name: "Catering",
    component: MainSection,
    props: { content: catering },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
