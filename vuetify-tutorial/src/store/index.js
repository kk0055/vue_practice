import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    snackbar: {
      show:false,
      variant:'success',
      message: 'Success! Item added to the cart'
    },
    cart: []
  },
  mutations: {
    addItemToCart(state, payload) {
      const {itemId, quantity} = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
