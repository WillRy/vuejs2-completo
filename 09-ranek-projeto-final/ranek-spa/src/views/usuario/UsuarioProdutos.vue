<template>
<section>
  <h2>Adicionar Produto</h2>
  <ProdutoAdicionar/>
  <h2>Seus Produtos</h2>
  <transition-group v-if="usuario_produtos" tag="ul" name="list">
    <li v-for="(produto,index) in usuario_produtos" :key="index">
      <ProdutoItem :produto="produto">
        <button class="deletar" @click="deletarProduto(produto.id)">Deletar</button>
      </ProdutoItem>
    </li>
  </transition-group>
</section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar";
import {mapState, mapActions} from 'vuex';
import ProdutoItem from "../../components/ProdutoItem";
import {api} from "../../services";
export default {
  name: "UsuarioProdutos",
  components: {
    ProdutoItem,
    ProdutoAdicionar
  },
  computed:{
    ...mapState(["login","usuario","usuario_produtos"])
  },
  methods:{
    ...mapActions(['getUsuarioProdutos']),
    deletarProduto(id){
      const confirm = window.confirm('Deseja remover este produto?');
      if(confirm){
        api.delete(`/produto/${id}`).then(()=>{
          this.getUsuarioProdutos();
        })  
      }
    }
  },
  watch:{
    login(){
      this.getUsuarioProdutos();
    }
  },
  created() {
    if(this.login){
      this.getUsuarioProdutos();  
    }
  }
}
</script>

<style scoped>
h2{
  margin-bottom: 20px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.deletar{
  position: absolute;
  top: 0;
  right: 0;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>