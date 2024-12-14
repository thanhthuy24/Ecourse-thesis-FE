// import UserLayout from '@/components/layouts/UserLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/UserHomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'UserLogin',
      meta: {
        layout: 'NoHeaderLayout',
      },
      component: () => import('@/views/login/UserLogin.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
