<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBuscar/>
    <ProdutosLista/>
  </section>
</template>
<script>
import ProdutosBuscar from "@/components/ProdutosBuscar";
import ProdutosLista from "@/components/ProdutosLista";
export default {
  name: 'home',
  components: {ProdutosLista, ProdutosBuscar},
  created() {
    document.title = 'Ranek';
  }
}
</script>
<style scoped>
h1 {
  font-size: 2rem;
  margin-top: 40px;
  text-align: center;
  color: #87f;
}
</style>