<template>
  <form class="adicionar-produto">
    <CustomInputModel id="nome" name="nome" label="Nome" v-model="produto.nome"/>

    <CustomInputModel id="preco" name="preco" label="Preco (R$)" v-model="produto.preco"/>

    <CustomInputFile id="fotos" name="fotos" label="Fotos" v-model="produto.fotos"/>

    <CustomTextArea id="descricao" name="descricao" label="Descricao" v-model="produto.descricao"/>

    <input type="button" class="btn" value="Adicionar Produto" @click.prevent="adicionarProduto">
  </form>
</template>

<script>
import {api} from "../services";
import CustomInputModel from "./Form/CustomInputModel";
import CustomInputFile from "./Form/CustomInputFile";
import CustomTextArea from "./Form/CustomTextArea";

export default {
  name: "ProdutoAdicionar",
  components: {CustomTextArea, CustomInputFile, CustomInputModel},
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

      const files = this.produto.fotos;
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
  align-items: center;
  margin-bottom: 60px;
}

.btn{
  max-width: 200px;
  justify-self: center;
}
</style>