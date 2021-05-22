export default {
  namespaced: true,
  state:{
    acao: null,
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    }
  },
  actions:{
    puxarAcao(context) {
      fetch(`https://api.origamid.dev/stock/aapl/quote`)
        .then(r => r.json())
        .then(dados => {
          context.commit('UPDATE_ACAO', dados);
          context.dispatch('completarAula', {
            nome: 'Ações'
          }, {root: true});
        });
    }
  }
}