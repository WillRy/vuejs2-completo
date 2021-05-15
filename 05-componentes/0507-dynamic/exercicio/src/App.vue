<template>
  <div id="app">
    <!-- 
    Crie 3 componentes:
  
    1: Componente falando sobre a empresa
    2: Componente com os serviços da empresa
    3: Componente com um formulário de contato
  
    Crie um menu, que ao clique ele mude os componentes
    acima de forma dinâmica. Não destrua o componente
   -->
    <nav>
      <ul>
        <li><a href="#" @click.prevent="menuAtivo = 'SobreEmpresa'">Sobre</a></li>
        <li><a href="#" @click.prevent="menuAtivo = 'ServicosEmpresa'">Serviços</a></li>
        <li><a href="#" @click.prevent="menuAtivo = 'FormularioContato'">Formulário</a></li>
      </ul>
    </nav>
    <hr>
    <keep-alive>
      <component :is="menuAtivo"></component>
    </keep-alive>
  </div>
</template>
<script>
import SobreEmpresa from "./components/SobreEmpresa";
import ServicosEmpresa from "./components/ServicosEmpresa";
import FormularioContato from "./components/FormularioContato";

export default {
  name: 'app',
  data() {
    return {
      menuAtivo: 'SobreEmpresa'
    }
  },
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    FormularioContato
  }
}
</script>