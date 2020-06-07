import Vue from "vue";
import VueRouter from "vue-router";

// 主路由
import Login from "../views/login.vue";
import Index from "../views/index.vue";

// 子路由
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Gmail from "../pages/Gmail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "about",
        name: "about",
        component: About
      },
      {
        path: "gmail",
        name: "gmail",
        component: Gmail
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
