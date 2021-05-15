<template>

<div>
  <button @click="adicionar">Adicionar</button>
  <transition-group mode="out-in" tag="ul">
    <li v-for="(produto,index) in carrinho" :key="produto.nome+index">
      <p>{{ produto.nome }} - {{ produto.preco }}</p>
      <button @click="remover(index)">Remover</button>
    </li>
  </transition-group>
</div>
  
</template>
<script>
export default {
  name: 'RemoverLista',
  data() {
    return {
      carrinho: [
        {
          nome: 'Notebook',
          preco: 2999
        },
        {
          nome: 'Smartphone',
          preco: 1399
        }
      ]
    }
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1);
    },
    adicionar(){
      this.carrinho.push({
        nome:`Aleatorio ${this.carrinho.length}`,
        preco: 1999
      })
    }
  }
}
</script>
<style>
.v-enter,.v-leave-to{
  opacity: 0;
  transform: translate3d(-30px,0,0);
}
.v-enter-active,.v-leave-active{
  transition: all 0.3s;
}


</style>