import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter:0
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--
    },
    increaseCounter(state, payload) {
      state.counter += payload
    },
 
  },
  actions: {
    increaseCounter({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response =>  {
        commit('increaseCounter',response.data)
      })
    },
  },
  getters: {
   counterSquared(state) {
     return state.counter * state.counter 
   }
  },
  modules: {
  }
})
