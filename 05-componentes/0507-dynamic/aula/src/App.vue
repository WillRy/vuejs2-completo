<template>
  <div id="app">
    <hr>
    
    <button @click="componentAtivo = 'AulaDescricao'">Descrição</button>
    <button @click="componentAtivo = 'AulaDownload'">Download</button>
    <keep-alive>
      <component :is="componentAtivo"></component>
    </keep-alive>
    <!--    <component :is="componentAtivo"></component>-->
    <hr>


  </div>
</template>
<script>
import AulaDescricao from "./components/AulaDescricao";
import AulaDownload from "./components/AulaDownload";

export default {
  name: 'app',
  data() {
    return {
      componentAtivo: 'AulaDescricao',
      menuAtivo: ''
    }
  },
  components: {
    AulaDescricao,
    AulaDownload
  }
}
</script>