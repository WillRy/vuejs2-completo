import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contato from "../views/Contato";
import Cursos from "../views/Cursos";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
