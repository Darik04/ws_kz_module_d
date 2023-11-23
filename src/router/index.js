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
      path: '/token',
      name: 'token',
      component: () => import('../views/SetTokenView.vue')
    },
    {
      path: '/chatterblast',
      name: 'chatterblast',
      component: () => import('../views/ChatterBlastView.vue')
    },
    {
      path: '/dreamweaver',
      name: 'dreamweaver',
      component: () => import('../views/DreamWeaverView.vue')
    },
    {
      path: '/mindreader',
      name: 'mindreader',
      component: () => import('../views/MindReaderView.vue')
    }
  ]
})

export default router
