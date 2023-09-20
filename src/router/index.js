import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import FinalView from "../views/FinalView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/final",
    name: "final",
    component: FinalView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
