import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Produto from "../views/Produto";
import Login from "../views/Login";
import Usuario from "../views/usuario/Usuario";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos";
import UsuarioCompras from "../views/usuario/UsuarioCompras";
import UsuarioVendas from "../views/usuario/UsuarioVendas";
import UsuarioEditar from "../views/usuario/UsuarioEditar";
import PaginaNaoEncontrada from "../views/PaginaNaoEncontrada";



Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    component: PaginaNaoEncontrada
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/usuario",
    component: Usuario,
    meta:{
      login: true
    },
    children:[
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      }
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
});


router.beforeEach((to, from, next) => {
  const login = to.matched.some((route) => route.meta.login);
  const token = window.localStorage.getItem('token');
  if(login && !token){
    next('/login');
  } else {
    next();
  }
});


export default router
