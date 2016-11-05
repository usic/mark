import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueTouch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
