import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    light: false
  },
  mutations: {
    turnlight(state, bLIght) {
      state.light = bLIght
    }
  },
  actions: {},
  modules: {}
})
