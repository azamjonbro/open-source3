import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/components/Login.vue'
import Game from '@/components/Game.vue'
import CreateWords from '@/views/CreateWords.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/game', component: Game },
  { path: '/createwords', component: CreateWords }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
