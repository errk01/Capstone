import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Portfolio from './components/portfolio/Portfolio'
import Home from '@/components/Home'
import Stocks from './components/stocks/Stocks.vue'

import store from './store/modules/store'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
    // beforeEnter (to, from, next) {
    //   if (store.state.idToken) {
    //     next()
    //   } else {
    //     next('/portfolio')
    //   }
    // }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  }
]

export default new VueRouter({mode: 'history', routes})