<template>
  <div>
    <h1>Curso ativo:{{curso}}</h1>
    <router-link :to="{name:'curso',params:{curso:'javascript'}}">JavaScript</router-link>
    <router-link :to="{name:'curso',params:{curso:'html'}}">HTML</router-link>
    <router-link :to="{name:'curso',params:{curso:'css'}}">CSS</router-link>
    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  props:['curso'],
  created() {
    // console.log('Componente criado')
  },
  //quando duas rotas usam o mesmo componente, mudando só o parametro
  beforeRouteUpdate(to,from,next){
    return next();
  }
}
</script>

<style scoped>

</style>