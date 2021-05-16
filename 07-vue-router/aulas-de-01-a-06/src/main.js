import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  // console.log(to,from);
  next();
});
// router.afterEach((to,from)=>{
//   // console.log(to,from);
// })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
