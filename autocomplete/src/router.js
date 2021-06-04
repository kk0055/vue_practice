import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
  ]
});