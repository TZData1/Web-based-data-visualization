import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Academy from './views/Academy.vue'
import Finance from './views/Finance.vue'
import HR from './views/HR.vue'
import Marketing from './views/Marketing.vue'
import Recruiting from './views/Recruiting.vue'
import Sales from './views/Sales.vue'
import Home from './views/Home.vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import Trend from 'vuetrend'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(Chartkick.use(Chart))
Vue.use(Trend)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home},
  { path: '/academy', component: Academy},
  { path: '/finance', component: Finance},
  { path: '/hr', component: HR},
  { path: '/marketing', component: Marketing},
  { path: '/recruiting', component: Recruiting},
  { path: '/sales', component: Sales},
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
