import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
    {
      path: '/resource/jb7j-dtam.json?year=:id',
      //:id represents variable in the URL
      name: 'Data',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Data.vue'),
    },
  ],
})

export default router
