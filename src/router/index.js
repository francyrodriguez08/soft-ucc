import Vue from 'vue'
import Router from 'vue-router'
import Explore from '../views/Explore'
import Profile from '../views/Profile'

Vue.use(Router)

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
    routes: [
      {
        path: "/",
        name: "Explore",
        component: Explore,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
    ]
  });