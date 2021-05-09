const vue = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: "Produto adicionado",
    alertaAtivo: false,
  },
  filters: {
    numeroPreco(valor) {
      return (+valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  computed: {
    carrinhoTotal() {
      return this.carrinho.reduce((prev, cur) => prev + cur.preco, 0);
    },
  },
  methods: {
    fetchProdutos() {
      fetch(`./api/produtos.json`)
        .then((r) => r.json())
        .then((dados) => {
          this.produtos = dados;
        });
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((r) => r.json())
        .then((dados) => {
          this.produto = dados;
        });
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.produto = false;
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({
        id,
        nome,
        preco,
      });
      this.alerta(`${nome} foi adicionado ao carrinho.`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    checarLocalStorage() {
      if (window.localStorage.getItem("carrinho")) {
        this.carrinho = JSON.parse(window.localStorage.getItem("carrinho"));
      }
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      window.setTimeout(() => {
        this.mensagemAlerta = "";
        this.alertaAtivo = false;
      }, 1500);
    },
    router(){
      const hash = window.location.hash;
      if(hash){
        this.fetchProduto(hash.replace('#',''));
      }
    }
  },
  watch: {
    carrinho() {
      window.localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
    },
    produto(){
      document.title = this.produto.nome || 'Techno';
      const hash = this.produto.id || ''
      window.history.pushState(null, null, `#${hash}`);
    }
  },
  created() {
    this.fetchProdutos();
    this.router();
    this.checarLocalStorage();
  },
});
