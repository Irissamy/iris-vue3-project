import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vueInfo',
    name: 'vueInfo',
    component: () => import('../views/VueInfo.vue')
  },
  {
    path: '/loginView',
    name: 'loginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboardView',
    name: 'dashboardView',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/admin/ProductsView.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/admin/OrdersView.vue')
      },
      {
        path: 'cupon',
        name: 'cupon',
        component: () => import('../views/admin/CuponView.vue')
      }
    ]
  },
  {
    path: '/userDashboard',
    name: 'userDashboard',
    component: () => import('../views/UserDashboard.vue'),
    children: [
      {
        path: 'userCart',
        name: 'userCart',
        component: () => import('../views/user/UserCart.vue')
      },
      {
        path: 'userProduct/:productId',
        name: 'userProduct',
        component: () => import('../views/user/UserProduct.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/user/UserCheckout.vue')
      },
      {
        path: 'userOrder',
        component: () => import('../views/user/UserOrder.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
