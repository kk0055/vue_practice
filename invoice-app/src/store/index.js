import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    invoiceModal: null,
  },
  mutations: {
    //Home.vue.Invoice.vueで使用
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
  },
  actions: {
  },
  modules: {
  }
})
