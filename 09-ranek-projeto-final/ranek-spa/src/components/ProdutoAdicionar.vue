<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" v-model="produto.nome">

    <label for="preco">Preco (R$)</label>
    <input type="number" name="preco" id="preco" v-model="produto.preco">

    <label for="fotos">Fotos</label>
    <input type="file" name="fotos" id="fotos" ref="fotos" multiple>

    <label for="descricao">Descricao</label>
    <textarea name="descricao" id="descricao" v-model="produto.descricao"></textarea>

    <input type="button" class="btn" value="Adicionar Produto" @click.prevent="adicionarProduto">
  </form>
</template>

<script>
import {api} from "../services";

export default {
  name: "ProdutoAdicionar",
  data() {
    return {
      produto: {
        nome: '',
        preco: '',
        descricao: '',
        fotos: null,
        vendido:'false'
      }
    }
  },
  methods: {
    formatarProduto() {
      const form = new FormData();
      form.append('nome', this.produto.nome);
      form.append('preco', this.produto.preco);
      form.append('descricao', this.produto.descricao);
      form.append('vendido', this.produto.vendido);
      form.append('usuario_id', this.$store.state.usuario.id);

      const files = this.$refs.fotos.files;
      files.forEach((file) => {
        form.append(file.name, file);
      });

      return form;
    },
    async adicionarProduto(event) {
      const produto = this.formatarProduto();

      const button = event.currentTarget;

      button.setAttribute('disabled','');
      button.value = 'Adicionando...';

      await api.post("/produto", produto);
      await this.$store.dispatch('getUsuarioProdutos');
      button.removeAttribute('disabled','');
      button.value ='Adicionar Produto';
    }
  }
}
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}
.btn{
  grid-column: 2;
}
</style>