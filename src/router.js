import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultView from '@/layouts/DefaultView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/pages/Orders.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: DefaultView,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/auth/Login.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
