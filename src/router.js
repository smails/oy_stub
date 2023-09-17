import { createRouter, createWebHistory } from 'vue-router'
import main from "@/pages/main";
import auth_login from "@/pages/auth-login";
import auth_register from "@/pages/auth-register";
import ui from "@/pages/uikit";

const routes = [
  {
    path: "/",
    name: 'home',
    component: main,
  },
  {
    path: "/auth/login",
    name: 'auth login',
    component: auth_login,
  },
  {
    path: "/auth/register",
    name: 'auth register',
    component: auth_register,
  },
  {
    path: "/ui",
    name: 'ui',
    component: ui,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router