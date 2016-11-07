import Vue from 'vue'
import VueRouter from 'vue-router'
import Faculty from './components/Faculty'
import Profession from './components/Profession'
import Year from './components/Year'
import Lesson from './components/Lesson'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/faculty/:faculty', component: Profession, name: 'profession' },
    { path: '/faculty/:faculty/profession/:profession', component: Year, name: 'year' },
    { path: '/faculty/:faculty/profession/:profession/year/:year', component: Lesson, name: 'lesson' },
    { path: '/', component: Faculty, name: 'home' }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App, Faculty, Profession, Lesson }
})
