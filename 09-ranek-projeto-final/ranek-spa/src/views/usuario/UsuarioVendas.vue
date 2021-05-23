<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div class="produto-wrapper" v-for="(venda,index) in vendas" :key="index">
        <ProdutoItem :produto="venda.produto" v-if="venda.produto">
          <p class="comprador"><span>Comprador:</span> {{venda.comprador_id}}</p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco">
            <li v-for="(dado,key) in venda.endereco" :key="key">{{key}}: {{ dado }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "../../components/ProdutoItem";
import {api} from "../../services";
import {mapState} from "vuex";

export default {
  name: "UsuarioVendas",
  components: {ProdutoItem},
  data() {
    return {
      vendas: null
    }
  },
  computed:{
    ...mapState(['login','usuario'])
  },
  methods: {
    getVendas() {
      api.get(`/transacao?tipo=vendedor_id`)
        .then((response) => {
          this.vendas = response.data;
        })
    }
  },
  watch: {
    login(){
      this.getVendas();
    }
  },
  created() {
    this.getVendas();
  }
}
</script>

<style scoped>
.produto-wrapper{
  margin-bottom: 40px;
}
.comprador span{
  color: #e80;
}
h2{
  margin-bottom: 20px;
}
.entrega{
  display: grid;
  grid-template-columns: minmax(100px,200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}
.entrega h3{
  margin: 0;
  justify-self: end;
}

@media screen and (max-width: 500px){
  .entrega{
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  .entrega h3{
    justify-self: start;
  }
}
</style>