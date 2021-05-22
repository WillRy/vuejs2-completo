<template>
  <div>
    <h4>Aulas</h4>
    <ul>
      <li v-for="(aula,index) in aulas" :key="index">
        {{aula.nome}} | {{aula.duracao}} minutos
        <button @click="COMPLETAR_AULA(aula)" v-if="!aulaEstaCompleta(aula.nome)">Completar</button>
        <button v-else disabled>Completar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
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
    ...mapMutations(['COMPLETAR_AULA'])
  },
  computed:{
    ...mapGetters(['aulaEstaCompleta'])
  }
}
</script>

<style scoped>

</style>