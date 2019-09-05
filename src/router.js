import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView";
import FriendsListView from "@/views/FriendsListView";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
    path: "/home",
    name: "home",
    alias: "/",
    meta: {
      title: "Home"
    },
    component: HomeView
  },
    {
      path: "/friends",
      name: "friends",

      meta: {
        title: "Friends"
      },
      component: FriendsListView
    },
    {
      path: "/addfriend",
      name: "addfriend",

      meta: {
        title: "Add Friend"
      },
      component: () => import("@/views/FriendDetailView")

    },

    {
    path: "*",
    redirect: "/home"
  }

  ]
});