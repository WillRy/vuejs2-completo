import Vue from 'vue';
import Vuex from 'vuex';
import acao from "./acao";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{acao},
  state: {
    aulasCompletas: [],
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
  },
  actions: {
    completarAula(context, payload) {
      context.commit('COMPLETAR_AULA', payload);
    },
  },
  getters: {
    //retorna true/false se a aula informada está completa
    aulaEstaCompleta: state => aulaNome => !!state.aulasCompletas.find((aula) => aula.nome === aulaNome),
    livrosLidos: state => lido => state.livros.filter((livro) => livro.lido===lido)
  }
})