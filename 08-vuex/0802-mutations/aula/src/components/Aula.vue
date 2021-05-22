<template>
  <div>
    <p>Qtde. Aulas {{ totalAulas }} | Usuário:{{ user }}</p>
    <button @click="handleClick">Modificar usuário</button>
    <input type="text" v-model="novoUser">
    <button @click="COMPLETAR_AULA">Completar Aula</button>
    
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
  name: "Aula",
  data() {
    return {
      totalAulas: 25,
      novoUser: ''
    }
  },
  methods:{
    ...mapMutations(['CHANGE_USER','COMPLETAR_AULA']),
    handleClick(){
      this.CHANGE_USER({user: this.novoUser, totalAulas: this.totalAulas});
      // this.$store.commit('CHANGE_USER',{user: this.novoUser, totalAulas: this.totalAulas});
    },
    // completarAula(){
    //   // this.$store.commit('COMPLETAR_AULA');
    // }
  },
  computed:{
    ...mapState(['user','aulasCompletas'])
    // user(){
    //   return this.$store.state.user;
    // },
    // aulasCompletas(){
    //   return this.$store.state.aulasCompletas;
    // }
  }
}
</script>

<style scoped>

</style>