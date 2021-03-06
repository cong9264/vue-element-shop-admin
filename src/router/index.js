import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
    meta: { title: '首页' }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()  => import('@/views/login'),
    meta: { title: '登录' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
