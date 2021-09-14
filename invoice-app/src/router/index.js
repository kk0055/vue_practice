import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InvoiceView from "../views/InvoiceView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
]

const router = new VueRouter({
  routes
})

export default router
