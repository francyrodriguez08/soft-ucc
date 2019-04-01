import Vue from 'vue'
import Router from 'vue-router'
import Explore from '../views/Explore'
import Profile from '../views/Profile'
import Welcome from '../views/Welcome'
import Login from '../views/Login'
import Register from '../views/Register'

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
        path: "/register",
        name: "Register",
        component: Register,
      },
    ]
  });