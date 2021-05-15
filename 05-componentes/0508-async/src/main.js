import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('SobreEmpresa', () => import('./components/SobreEmpresa'))

new Vue({
  render: h => h(App),
}).$mount('#app')
