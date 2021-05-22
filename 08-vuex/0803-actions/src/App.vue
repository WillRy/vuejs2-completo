<template>
  <div id="app">
    <hr>
      {{$store.state.acao}}
    <hr>
    <Aluno/>
    <Curso/>
  </div>
</template>
<script>
import Aluno from "./components/Aluno";
import Curso from "./components/Curso";
export default {
  name:'app',
  components: {Curso, Aluno},
  created() {
    this.$store.dispatch('puxarAcao');
  }
}
</script>