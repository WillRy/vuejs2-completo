<template>
  <div id="app">
   <ul>
     <li><a href="#" @click.prevent="menuAtivo = 'SobreEmpresa'">Sobre</a></li>
     <li><a href="#" @click.prevent="menuAtivo = 'ServicosEmpresa'">Serviços</a></li>
     <li><a href="#" @click.prevent="menuAtivo = 'FormularioContato'">Contato</a></li>
   </ul>
    <hr>
    <keep-alive>
      <component :is="menuAtivo"></component>
    </keep-alive>
  </div>
</template>
<script>
// import SobreEmpresa from "./components/SobreEmpresa";
// import FormularioContato from "./components/FormularioContato";
// import ServicosEmpresa from "./components/ServicosEmpresa";

const ServicosEmpresa = () => import(/* webpackChunkName: "servicos" */"./components/ServicosEmpresa");

export default {
  name: 'app',
  data(){
    return {
      menuAtivo:'SobreEmpresa'
    }
  },
  components:{
    // SobreEmpresa,
    ServicosEmpresa: ServicosEmpresa,
    FormularioContato: () => import(/* webpackChunkName: "formulario" */"./components/FormularioContato")
  }
}
</script>
