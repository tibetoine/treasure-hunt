import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paintskull from '../views/Paintskull.vue'
import Clock from '../views/Clock.vue'
import Bed from '../views/Bed.vue'
import Paintpirate from '../views/Paintpirate.vue'
import Map from '../views/Map.vue'
import Chest from '../views/Chest.vue'
import Carpet from '../views/Carpet.vue'
import Window from '../views/Window.vue'
import Table from '../views/Table.vue'
import Bag from '../views/Bag.vue'
import Lettre from '../views/Lettre.vue'
import Tresor from '../views/Tresor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/paint-skull',
    name: 'Paintskull',
    component: Paintskull
  },
  {
    path: '/clock',
    name: 'Clock',
    component: Clock
  },
  {
    path: '/bed',
    name: 'Bed',
    component: Bed
  },
  {
    path: '/paint-pirate',
    name: 'Paintpirate',
    component: Paintpirate
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/chest',
    name: 'Chest',
    component: Chest
  },
  {
    path: '/carpet',
    name: 'Carpet',
    component: Carpet
  },
  {
    path: '/window',
    name: 'Window',
    component: Window
  },
  {
    path: '/bag',
    name: 'Bag',
    component: Bag
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/lettre',
    name: 'lettre',
    component: Lettre
  },
  {
    path: '/tresor',
    name: 'tresor',
    component: Tresor
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
