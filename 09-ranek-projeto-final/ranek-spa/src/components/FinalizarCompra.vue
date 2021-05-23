<template>
  <section>
    <h2>Endereço de envio</h2>
    <ErroNotificacao :erros="erros"/>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "./UsuarioForm";
import {api} from "../services";
import {mapState} from "vuex";

export default {
  name: "FinalizarCompra",
  props: ['produto'],
  components: {
    UsuarioForm
  },
  data(){
    return {
      erros:[]
    }
  },
  computed: {
    ...mapState(['usuario', 'login']),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          estado: this.usuario.estado,
        }
      }
    }
  },
  methods: {
    criarTransacao() {
      return api.post(`/transacao`, this.compra)
        .then(() => {
          this.$router.push({name: 'compras'});
        })
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch('criarUsuario', this.$store.state.usuario);
        await this.$store.dispatch('logarUsuario', this.$store.state.usuario);
        await this.$store.dispatch('getUsuario');
        await this.criarTransacao();
      } catch (erro) {
        if(erro.response && erro.response.data.message){
          this.erros.push(erro.response.data.message)
        }else{
          this.erros.push('Não foi possível editar o perfil!');
        }
      }
    },
    finalizarCompra() {
      this.erros = [];
      if (this.login) {
        this.criarTransacao();
      } else {
        this.criarUsuario();
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn{
  background: #e80;
}
</style>