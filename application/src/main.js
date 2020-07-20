import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(Chartkick.use(Chart))
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: App},
  { path: '/home', component: App}
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
