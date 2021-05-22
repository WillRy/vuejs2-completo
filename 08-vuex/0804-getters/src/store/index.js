import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    acao: null,
    livros: [
      {
        nome: "O Senhor dos Anéis",
        lido: true,
      },
      {
        nome: "Harry Potter",
        lido: true,
      },
      {
        nome: "As Crônicas de Gelo e Fogo",
        lido: false,
      }
    ]
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      state.aulasCompletas.push(payload);
    },
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit('COMPLETAR_AULA', payload);
    },
    puxarAcao(context) {
      fetch(`https://api.origamid.dev/stock/aapl/quote`)
        .then(r => r.json())
        .then(dados => {
          context.commit('UPDATE_ACAO', dados);
          context.dispatch('completarAula', {
            nome: 'Ações'
          });
        });
    }
  },
  getters: {
    //retorna true/false se a aula informada está completa
    aulaEstaCompleta: state => aulaNome => !!state.aulasCompletas.find((aula) => aula.nome === aulaNome),
    livrosLidos: state => lido => state.livros.filter((livro) => livro.lido===lido)
  }
})