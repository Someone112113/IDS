import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/IDS/",
    name: "Home",
    component: Home,
  },
  {
    path: "/IDS/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/IDS/league",
    name: "League",
    component: () => import("@/views/League.vue"),
  },
  {
    path: "/IDS/social",
    name: "Social",
    component: () => import("@/views/Social.vue"),
  },
  {
    path: "/IDS/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
