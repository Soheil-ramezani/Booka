import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookPage from '@/views/bookPage/BookPage.vue'
import OrdersPage from '@/views/OrdersPage/Orders.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
       props: true, // Enable props
    },
    {
      path: '/BookPage',
      name: 'BookPage',
      component:BookPage,
      props: true, // Enable props
    },
    {
      path: '/Orders',
      name: 'Orders',
      component:OrdersPage,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
