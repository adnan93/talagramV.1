import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  

  {
    path: '/Prices',
    name: 'Prices',
    component: () => import('../views/Prices.vue')
  },

  

  

  {
    path: '/Connect',
    name: 'Connect',
    component: () => import('../views/Connect.vue')
  },


  {
    path: '/MainChart',
    name: 'MainChart',
    component: () => import('../views/MainChart.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
