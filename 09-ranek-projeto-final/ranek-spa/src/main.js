import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import PaginaCarregando from "./components/PaginaCarregando";
import ErroNotificacao from "./components/ErroNotificacao";

Vue.config.productionTip = false

Vue.component('PaginaCarregando', PaginaCarregando);
Vue.component('ErroNotificacao', ErroNotificacao);

Vue.filter('numeroPreco', (valor) => {
  const novoValor = Number(valor);
  if(isNaN(novoValor)) return valor;
  return novoValor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
