import Vue from 'vue'
import Router from 'vue-router'
import Splash from '../pages/splash/Splash.vue'
import Home from '../pages/home/Home.vue'
import FlightDetail from '../pages/detail/FlightDetail.vue'
import SearchResults from '../pages/results/SearchResults.vue'

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
      path: '/results/:a/:b/',
      name: 'Results',
      component: SearchResults
    },

    {
      path: '/detail/:a/:b/',
      name: 'Detail',
      component: FlightDetail
    }
  ]
})
