import DolarHoje from './DolarHoje.js';
export default {
  name: 'AcaoHoje',
  data(){
    return {
      acao: null
    }
  },
  methods:{
    fetchAcao(){
      fetch(`https://api.origamid.dev/stock/aapl/quote`)
      .then(r => r.json())
      .then(dados => {
        this.acao = dados.marketCap;
      })
    }
  },
  created(){
    this.fetchAcao();
  },
  computed:{
    dolarFormatado(){
      if(this.acao){
        return this.acao.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
      }
    }
  },
  components:{
    DolarHoje
  },
  template:`
    <div>
      <div v-if="acao">
        <p>Valor de mercado: {{dolarFormatado}}</p>
      </div>
      <dolar-hoje></dolar-hoje>
    </div>
    `
}

// consolidated_weather
// https://api.origamid.dev/stock/aapl/quote