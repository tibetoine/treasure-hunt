import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    light: false,
    items: [],
    itemstoget: [
      {
        id: 1,
        name: 'map',
        image: 'map.jpg'
      },
      {
        id: 2,
        name: 'jumelles',
        image: 'jumelles.jpg'
      },
      {
        id: 3,
        name: 'loupe',
        image: 'loupe.jpg'
      },
      {
        id: 4,
        name: 'loupe2',
        image: 'loupe2.jpg'
      },
      {
        id: 4,
        name: 'lettre',
        image: 'lettre.jpg'
      }
    ]
  },
  mutations: {
    turnlight(state, bLIght) {
      state.light = bLIght
    },
    addMap(state) {
      state.items.push({
        id: 1,
        name: 'map',
        image: 'map.jpg'
      })
    },
    addLoupe(state) {
      state.items.push({
        id: 3,
        name: 'loupe',
        image: 'loupe.jpg'
      })
    },
    addLettre(state) {
      state.items.push({
        id: 5,
        name: 'lettre',
        image: 'lettre.jpg'
      })
    }
  },
  actions: {},
  modules: {},
  getters: {
    getmap: (state) => {
      console.log(state.items)
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index]
        if (item.id === 1) {
          return item
        }
      }
      return null
    }
  }
})
