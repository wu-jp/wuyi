import Vue from "vue";
import VueRouter from "vue-router";

// 主路由
import Login from "../views/login.vue";
import Index from "../views/index.vue";
import Demo from "../views/demo.vue";

// 子路由
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Gmail from "../pages/Gmail.vue";
import Computed from "../components/demo/computed.vue";
import Phone from "../components/demo/phone.vue";
import Card from "../components/demo/card.vue";
import Game from "../components/demo/game.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [{
        path: "/",
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
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    children: [{
        path: "/",
        name: "computed",
        component: Computed
      },
      {
        path: "/phone",
        name: "phone",
        component: Phone
      },
      {
        path: "/card",
        name: "card",
        component: Card
      },
      {
        path: "/game",
        name: "game",
        component: Game
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