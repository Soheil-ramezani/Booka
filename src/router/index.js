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
      component: () => import('@/views/bookPage/BookPage.vue'),
      props: true, // Enable props
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: OrdersPage,
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('@/views/Login/LogIn.vue'),
      children: [
        {
          path: '',
          name: 'logInForm',
          component: () => import('@/components/Forms/LogInForm/logInForm.vue')
        },
        {
          path: 'signUpForm',
          name: 'signUpForm',
          component: () => import('@/components/Forms/signUpForm/signUpForm.vue')
        },
        {
          path: 'forgotForm',
          name: 'forgotForm',
          component: () => import('@/components/Forms/forgotpassForm/forgotForm.vue')
        }
      ]
    },
    {
      path: '/userPanel',
      name: 'userPanel',
      component: () => import('@/views/userPanel/userPanel.vue'),
      children: [
        {
          path: '',
          name: 'userPanelDashboard',
          component: () => import('@/components/userPanelParts/dashboard/dashboard.vue')
        },
        {
          path:'orderHistory',
          name:'orderHistory',
          component:()=> import('@/components/userPanelParts/orderHistory/orderHistory.vue')
        }
      ]
    },
    // managerPanel
    {
      path:'/managerPanel',
      name:'managerPanel',
      component:()=>import('@/views/managerPanel/managerPanel.vue'),
      children:[
        {
          path:'',
          name:'SalesFigures',
          component:()=> import('@/components/managerParts/SalesFigures/SalesFigures.vue')
        },
        {
          path:'UsersList',
          name:'UsersList',
          component:()=>import('@/components/managerParts/usersList/usersList.vue')
        }
      ]
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
