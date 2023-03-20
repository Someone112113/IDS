import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/league",
    name: "League",
    component: () => import("@/views/League.vue"),
  },
  {
    path: "/social",
    name: "Social",
    component: () => import("@/views/Social.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
