import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ThankYou from '../views/ThankYou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Store',
    name: 'Store',
    component: Store
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/ThankYou',
    name: 'ThankYou',
    component: ThankYou
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
