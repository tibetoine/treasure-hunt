import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: '??',
    light: false,
    items: [],
    enigma: {
      op1: 30,
      op2: Math.floor(Math.random() * 10 + 1)
    },
    enigma2: {
      x: 1,
      y: 1,
      ops: [],
      result: 0
    },
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
        name: 'Une carte au trésor',
        image: 'map.jpg',
        link: 'mapitem'
      })
    },
    addLoupe(state) {
      state.items.push({
        id: 3,
        name: 'Une loupe. Elle pourra être utile',
        image: 'loupe.png',
        link: '404'
      })
    },
    addLettre(state) {
      state.items.push({
        id: 5,
        name: 'Une lettre étrange',
        image: 'lettre.jpg',
        link: '/lettre'
      })
    },
    setName(state, name) {
      state.name = name
    },
    initEnigma2(state) {
      let x = state.enigma2.x
      let y = state.enigma2.x

      const getDirectionPossibles = (x, y) => {
        let directions_possibles = []
        if (x < 8) {
          directions_possibles.push('right')
        }
        if (x > 1) {
          directions_possibles.push('left')
        }
        if (y < 8) {
          directions_possibles.push('top')
        }
        if (y > 1) {
          directions_possibles.push('bot')
        }
        return directions_possibles
      }

      const getDirection = (directionsPossibles) => {
        return directionsPossibles[
          Math.floor(Math.random() * directionsPossibles.length)
        ]
      }
      const getText = (direction) => {
        switch (direction) {
          case 'left':
            return '←'
          case 'right':
            return '→'
          case 'top':
            return '↑'
          case 'bot':
            return '↓'

          default:
            break
        }
      }

      const getOneStep = () => {
        let directions_possibles = getDirectionPossibles(x, y)
        let direction = getDirection(directions_possibles)
        let steps = 0
        switch (direction) {
          case 'left':
            steps = Math.floor(Math.random() * (x - 1) + 1)
            x = x - steps
            break
          case 'right':
            steps = Math.floor(Math.random() * (8 - x) + 1)
            x = x + steps
            break
          case 'bot':
            steps = Math.floor(Math.random() * (y - 1) + 1)
            y = y - steps
            break
          case 'top':
            steps = Math.floor(Math.random() * (8 - y) + 1)
            y = y + steps
            break

          default:
            break
        }

        let oneStep = {
          direction: direction,
          steps: steps,
          text: getText(direction),
          x: x,
          y: y
        }
        state.enigma2.ops.push(oneStep)
      }
      let i = 0
      while (i < Math.floor(Math.random() * 6 + 4)) {
        i = i + 1
        getOneStep(x, y)
      }
      state.enigma2.result = (8 - y) * 8 + x
    }
  },
  actions: {},
  modules: {},
  getters: {
    getmap: (state) => {
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index]
        if (item.id === 1) {
          return item
        }
      }
      return null
    },
    getloupe: (state) => {
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index]
        if (item.id === 3) {
          return item
        }
      }
      return null
    },
    getlettre: (state) => {
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index]
        if (item.id === 5) {
          return item
        }
      }
      return null
    }
  }
})

export default store
