import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
const Login = () => import("@/views/Login.vue");
const League = () => import("@/views/League.vue");
const Social = () => import("@/views/Social.vue");
const Profile = () => import("@/views/Profile.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/league",
    name: "League",
    component: League,
  },
  {
    path: "/social",
    name: "Social",
    component: Social,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
