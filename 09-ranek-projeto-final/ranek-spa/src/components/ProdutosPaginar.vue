<template>
  <ul v-if="paginasTotal > 1">
    <li>
      <router-link
        :to="query(1)"
        :class="{active: paginaEstaAtiva(1)}"
        title="Primeira"
      >
        &lt;&lt;
      </router-link>
    </li>
    <li v-for="pagina in paginas" :key="pagina">
      <router-link
        :to="query(pagina)"
        :class="{active: paginaEstaAtiva(pagina)}"
      >
        {{ pagina }}
      </router-link>
    </li>
    <li>
      <router-link
        :to="query(paginasTotal)"
        :class="{active: paginaEstaAtiva(paginasTotal)}"
        title="Última"
      >
        &gt;&gt;
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1
    },
    produtosTotal: {
      type: Number,
      default: 1
    }
  },
  methods: {
    query(pagina) {
      return {
        query: {
          ...this.$route.query, _page: pagina
        },
      }
    },
    paginaEstaAtiva(pagina) {
      return pagina === this.paginaAtual;
    }
  },
  computed: {
    paginas() {
      const current = this.paginaAtual;
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);

      return pagesArray;
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
    paginaAtual() {
      return Number(this.$route.query._page || 1);
    },
  }
}
</script>

<style scoped>
ul {
  grid-column: 1/-1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active, li a:hover, .active {
  background: #87f;
  color: #fff;
}
</style>