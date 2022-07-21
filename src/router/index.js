import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import(/* webpackChunkName: "starships" */ '../views/StarShipsView.vue')
  },
  {
    path: '/starships/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "details" */ '../views/DetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
