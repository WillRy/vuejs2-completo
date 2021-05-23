<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div class="produto-wrapper" v-for="(compra,index) in compras" :key="index">
        <ProdutoItem :produto="compra.produto" v-if="compra.produto">
          <p class="vendedor"><span>Vendedor:</span> {{compra.vendedor_id}}</p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "../../components/ProdutoItem";
import {api} from "../../services";
import {mapState} from "vuex";

export default {
  name: "UsuarioCompras",
  components: {ProdutoItem},
  data() {
    return {
      compras: null
    }
  },
  computed:{
    ...mapState(['login','usuario'])
  },
  methods: {
    getCompras() {
      api.get(`/transacao?comprador_id=${this.usuario.id}`)
        .then((response) => {
          this.compras = response.data;
        })
    }
  },
  watch: {
    login(){
      this.getCompras();
    }
  },
  created() {
    this.getCompras();
  }
}
</script>

<style scoped>
.produto-wrapper{
  margin-bottom: 40px;
}
.vendedor span{
  color: #e80;
}
h2{
  margin-bottom: 20px;
}
</style>