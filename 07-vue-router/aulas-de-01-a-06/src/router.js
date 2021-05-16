import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";

// import Cursos from "./views/Cursos";
// import Curso from "./views/Curso";
// import CursoAulas from "./views/CursoAulas";
// import CursoDescricao from "./views/CursoDescricao";

const Cursos = () => import(/* webpackChunkName: "cursos" */"./views/Cursos");
const Curso = () => import(/* webpackChunkName: "cursos" */"./views/Curso");
const CursoAulas = () => import(/* webpackChunkName: "cursos" */"./views/CursoAulas");
const CursoDescricao = () => import(/* webpackChunkName: "cursos" */"./views/CursoDescricao");

import Acoes from "./views/Acoes";
import AcoesDados from "./views/AcoesDados";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'home',
    component: Home
  },
  {
    path:'/acoes',
    name:'acoes',
    component: Acoes,
    children: [
      {
        path:':simbolo',
        name:'acao',
        component: AcoesDados,
        props:true,
      }
    ]
  },
  {
    path:'/cursos',
    name:'cursos',
    component: Cursos,
    props: true,
    children:[
      {
        path:':curso',
        name:'curso',
        component: Curso,
        props:true,
        children:[
          {
            path:'aulas',
            name:'aulas',
            component:CursoAulas,
            props:true,
          },
          {
            path:'descricao',
            name:'descricao',
            component:CursoDescricao,
            props:true,
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior:()=>{
    return window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
});

export default router;