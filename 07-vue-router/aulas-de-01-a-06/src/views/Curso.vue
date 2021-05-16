<template>
  <div>
    <h2>{{curso}}</h2>
    <router-link :to="{name:'descricao'}">Descrição</router-link>
    <router-link :to="{name:'aulas'}">Aulas</router-link>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props:['curso'],
  created() {
    // console.log('Componente criado')
    this.puxarDados('created');
  },
  methods:{
    puxarDados(contexto){
      console.log(`puxei a API:${contexto}`);
    }
  },
  watch:{
    "$route.params.curso":function (){
      this.puxarDados('watch');
    }
  },
  beforeRouteEnter(to,from,next){
    next((vm)=>{
      vm.puxarDados('beforeRouteEnter');
    })
  },
  beforeRouteUpdate(to,from,next){
    return next();
  },
  beforeRouteLeave(to,from,next){
    const confirmar = window.confirm('Deseja sair?');
    if(confirmar){
      next();
    }
  }
}
</script>

<style scoped>

</style>