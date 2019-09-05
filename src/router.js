import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    path: "/home",
    name: "home",
    alias: "/",
    meta: {
      title: "Home"
    },
    component: HomeView
  }, {
    path: "*",
    redirect: "/home"
  }

  ]
});