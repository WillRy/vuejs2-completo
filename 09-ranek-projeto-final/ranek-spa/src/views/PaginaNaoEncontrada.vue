<template>
  <div>
    <h1>Página não encontrada!</h1>
    <router-link to="/" class="btn home">
      Voltar para a página inicial
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PaginaNaoEncontrada",
};
</script>

<style scoped>
h1 {
  color: #e80;
  margin: 150px auto 60px auto;
  text-align: center;
}
.home {
  margin: 0 auto;
  width: 250px;
}
</style>