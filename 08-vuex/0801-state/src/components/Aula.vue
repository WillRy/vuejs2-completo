<template>
  <div>
    <p>Qtde. Aulas {{ totalAulas }} | Usuário:{{ user }}</p>
    <button @click="mostrarConsole">Mostrar no console</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "Aula",
  data() {
    return {
      totalAulas: 25
    }
  },
  methods:{
    mostrarConsole(){
      console.log(this.user);
    }
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