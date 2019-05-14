import Vue from 'vue'
import Router from 'vue-router'
import Explore from '../views/Explore'
import Profile from '../views/Profile'
import Welcome from '../views/Welcome'
import Login from '../views/Login'
import Register from '../views/Register'
import Experiences from '../views/Experiences'
import Favorite from '../views/Favorite'
import Maps from '../views/Maps'

Vue.use(Router)

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
    routes: [
      {
        path: "/",
        name: "Welcome",
        component: Welcome,
      },
      {
        path: "/ingresar",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
      {
        path: "/experiences",
        name: "Experiences",
        component: Experiences,
      },
      {
        path: "/favorite",
        name: "Favorite",
        component: Favorite,
      },
      {
        path: "/explore",
        name: "Explore",
        component: Explore,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/maps",
        name: "Maps",
        component: Maps,
      }
    ]
  });