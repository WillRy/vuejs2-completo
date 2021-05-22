<template>
  <div>
    <h4>Aulas</h4>
    <ul>
      <li v-for="(aula,index) in aulas" :key="index">
        {{aula.nome}} | {{aula.duracao}} minutos
        <button @click="completarAula(aula)" v-if="!aulaEstaCompleta(aula.nome)">Completar</button>
        <button v-else disabled>Completar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "Aulas",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        }
      ],
    }
  },
  methods:{
    ...mapActions(['completarAula'])
    // handleClick(aula){
    //   this.$store.dispatch('completarAula',aula);
    // }
  },
  computed:{
    ...mapGetters(['aulaEstaCompleta']),
  }
}
</script>

<style scoped>

</style>