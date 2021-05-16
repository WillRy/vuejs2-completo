<template>
  <div>
    <p v-if="loading">Carregando...</p>
    <ul v-else>
      <li v-for="(dado,chave) in acoes" :key="chave">{{chave}}:{{dado}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AcoesDados",
  props:['simbolo'],
  data(){
    return {
      loading: false,
      acoes: null,
    }
  },
  methods:{
    puxarAcao(){
      this.loading = true;
      this.acoes = null;
      fetch(`https://api.origamid.dev/stock/${this.simbolo}/quote`)
      .then(r=>r.json())
      .then(dados => {
        this.acoes = dados;
      }).finally(()=>{
        this.loading = false;
      })
    }
  },
  watch:{
    '$route.params.simbolo':function (){
      this.puxarAcao();
    }
  },
  created() {
    this.puxarAcao();
  }
}
</script>

<style scoped>

</style>