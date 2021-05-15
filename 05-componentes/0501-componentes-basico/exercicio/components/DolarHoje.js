export default {
  name: 'DolarHoje',
  data(){
    return {
      dolar:null
    }
  },
  methods:{
    fetchDolar(){
      fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=411e925264fe6a8b5eb025ea60f4224d&symbols=USD`)
      .then(r => r.json())
      .then(dados => {
        this.dolar = dados;
      })
    }
  },
  created(){
    this.fetchDolar();
  },
  template:`
    <div v-if="dolar">
      <p>
        Dolar hoje: {{dolar.rates.USD.toFixed(2)}}
      </p>
    </div>
  `
}
// 411e925264fe6a8b5eb025ea60f4224d