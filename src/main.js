// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'
import Components from './components/'

const moment = require('moment')
require('moment/locale/fr')
Vue.use(VueMoment, {
  moment
})

Components.forEach((component) => {
  Vue.component(component.name, component.template)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
