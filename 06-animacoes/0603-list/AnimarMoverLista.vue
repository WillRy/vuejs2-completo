<template>
  <div>
    <button @click="filtrarAZ">A-Z</button>
    <button @click="filtrarZA">Z-A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">{{filme}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "AnimarMoverLista",
  data(){
    return {
      filmes: [
        "O Senhor dos Aneis",
        "As Crônicas de Nárnia",
        "Coração Valente",
        "Harry Potter"
      ]
    }
  },
  methods:{
    filtrarAZ(){
      this.filmes.sort();
    },
    filtrarZA(){
      this.filmes.sort().reverse();
    }
  }
}
</script>

<style scoped>
.v-move{
  transition: transform 0.3s;
}
ul{
  list-style: none;
  padding: 0;
}
li{
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  background: #fff;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>