import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
      component:() => import('@/views/bookPage/BookPage.vue'),
      props: true, // Enable props
    },
    {
      path: '/Orders',
      name: 'Orders',
      component:OrdersPage,
    },
    {
      path:'/LogIn',
      name:'LogIn',
      component:()=>import('@/views/Login/LogIn.vue')

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
