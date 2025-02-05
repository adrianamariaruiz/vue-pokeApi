import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'poke view',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
