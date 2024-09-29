import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import ProductView from '@/views/ProductView.vue'
import SuccessView from '@/views/SuccessView.vue'
import StartPageView from '@/views/StartPageView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero',
      component: StartPageView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
  ]
})

export default router
