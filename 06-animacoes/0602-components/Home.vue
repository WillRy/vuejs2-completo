<template>
  <div>
    <nav>
      <ul>
        <li><a href="#" @click.prevent="menuAtivo = 'PaginaSobre'">Sobre</a></li>
        <li><a href="#" @click.prevent="menuAtivo = 'PaginaServicos'">Serviços</a></li>
      </ul>
    </nav>
    <hr>
    <transition mode="out-in">
      <keep-alive>
        <component :is="menuAtivo"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import PaginaSobre from "./PaginaSobre";
import PaginaServicos from "./PaginaServicos";

export default {
  name: "Home",
  components: {
    PaginaSobre,
    PaginaServicos
  },
  data() {
    return {
      menuAtivo: 'PaginaSobre'
    }
  }
}
</script>

<style scoped>
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translate3d(0,-20px,0);
}

.v-enter-active, .v-leave-active {
  transition: all .3s;
}
</style>