import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bar',
      name: 'death-count',
      component: () => import('../views/BarView.vue'),
    },
    {
      path: '/pie',
      name: 'cause-of-death',
      component: () => import('../views/PieView.vue'),
    },
  ],
})

export default router
