import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../pages/splash/Splash.vue'
import Home from '../pages/home/Home.vue'
import FlightDetail from '../pages/detail/FlightDetail.vue'

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
    },

    {
      path: '/detail/:id',
      name: 'Detail',
      component: FlightDetail
    }
  ]
})
