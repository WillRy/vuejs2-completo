<template>
  <div id="app">
    <hr>
    <h2>Livros</h2>
    <h4>Lidos</h4>
    <ul>
      <li v-for="livro in $store.getters.livrosLidos(true)" :key="livro.nome">{{ livro.nome }}</li>
    </ul>
    <h4>Não Lidos</h4>
    <ul>
      <li v-for="livro in $store.getters.livrosLidos(false)" :key="livro.nome">{{ livro.nome }}</li>
    </ul>
    <hr>
    <h2>Ações</h2>
    {{ $store.state.acao.acao }}
    <hr>
    <Aluno/>
    <Curso/>
  </div>
</template>
<script>
import Aluno from "./components/Aluno";
import Curso from "./components/Curso";

export default {
  name: 'app',
  components: {Curso, Aluno},
  created() {
    this.$store.dispatch('acao/puxarAcao');
  }
}
</script>