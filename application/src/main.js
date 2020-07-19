import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Chartkick.use(Chart))
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
