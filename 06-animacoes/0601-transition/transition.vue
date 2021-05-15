<template>
  <div>
    <button @click="ativo = !ativo">Toggle</button>
    <transition name="fade">
      <h1 v-if="ativo">Serviços</h1>  
    </transition>
    
    <transition
      enter-active-class="animar"
      leave-active-class="animar"
      enter-class="animou"
      leave-to-class="animou"
    >
      <h1 v-if="ativo">Serviços</h1>
    </transition>

    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <h1 v-if="ativo">Serviços</h1>
    </transition>

    <transition appear name="fade">
      <h1>Serviços</h1>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      ativo: false
    }
  },
  methods:{
    enter(elemento){
      console.log(elemento);
    },
    beforeEnter(elemento){
      console.log(elemento);
    }
  }
}
</script>
<style>
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 2s;
}

.animar{
  transition: opacity 2s;
}
.animou{
  opacity: 0;
}
</style>