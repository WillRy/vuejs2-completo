export default {
  name: 'TempoHoje',
  data(){
    return {
      tempo: null
    }
  },
  methods:{
    fetchTempo(){
      fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/455825`)
      .then(r => r.json())
      .then(dados => {
        const ultimoClima = dados.consolidated_weather[0];
        const {min_temp,max_temp,the_temp} = ultimoClima;
        this.tempo = {
          min_temp: min_temp.toFixed(2),
          max_temp: max_temp.toFixed(2),
          the_temp: the_temp.toFixed(2)
        };
      })
    }
  },
  created(){
    this.fetchTempo();
  },
  template:`
    <div v-if="tempo">
      <p>Temperatura mínima: {{tempo.min_temp}}</p>
      <p>Temperatura máxima: {{tempo.max_temp}}</p>
      <p>Temperatura atual: {{tempo.the_temp}}</p>
    </div>
    `
}

// consolidated_weather