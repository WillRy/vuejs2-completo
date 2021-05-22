<template>
  <div>
    <h1>Informações do Aluno</h1>
    <p>Aulas completas</p>
    <ul>
      <li v-for="(aula,index) in aulasCompletas" :key="index">{{aula.nome}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Aluno",
  computed:{
    ...mapState(['aulasCompletas'])
  }
}
</script>

<style scoped>

</style>