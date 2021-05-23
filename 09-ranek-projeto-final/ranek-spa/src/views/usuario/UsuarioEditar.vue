<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
    <ErroNotificacao :erros="erros"/>
  </section>
</template>

<script>
import UsuarioForm from "../../components/UsuarioForm";
import {api} from "../../services";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm
  },
  data(){
    return {
      erros:[]
    }
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      const usuario = this.$store.state.usuario;
      api.put(`/usuario`, usuario)
        .then(() => {
          this.$store.dispatch('getUsuario');
          this.$router.push({name: 'usuario'})
        })
        .catch(erro => {
          if(erro.response && erro.response.data.message){
            this.erros.push(erro.response.data.message)
          }else{
            this.erros.push('Não foi possível editar o perfil!');
          }
        })
    }
  },
  created() {
    document.title = 'Usuário | Editar';
  }
}
</script>

<style scoped>

</style>