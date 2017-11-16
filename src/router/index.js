import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../pages/splash/Splash.vue'
import Home from '../pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
