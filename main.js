// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueRsource from 'vue-resource'
import App from './App.vue'
import router from '@/router'
import store from './store/store'
import axios from 'axios'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify)
// Vue.use(VueRsource)
Vue.use(VueRouter)

axios.defaults.baseURL = 'https://vuestock-pro.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'asdfasdf'
axios.defaults.headers.get['Accepts'] = 'application/json'

//  Vue.config.productionTip = false
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
