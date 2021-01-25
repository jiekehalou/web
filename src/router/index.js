import Vue from 'vue'
import VueRouter from 'vue-router'
import mainFrame from '../views/main-frame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: mainFrame,
    children: [
      {
        path: '/home',
        name: 'FMS06P001',
        component: () => import('@/views/home')
      },
      {
        path: '/map',
        name: 'FMS06P001',
        meta: {
          icon: '',
          codes: ['add'],
          title: '航班监控',
        },
        component: () => import('@/views/map')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/login.vue')
  },
  {
    path: '*', redirect: { path: '/login' }
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  hashbang: true,
  PositionDescriptor () {
    return { x: 0, y: 0, selector: ".container" }
  },
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
