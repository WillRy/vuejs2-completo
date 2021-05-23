<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <ErroNotificacao :erros="erros"/>
    <transition mode="out-in">
      <button class="btn" @click="criar = true" v-if="!criar">Criar Conta</button>
      <UsuarioForm v-else>
        <button class="btn btn-form" @click.prevent="criarUsuario">Criar Usuário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "./UsuarioForm";

export default {
  name: "LoginCriar",
  components: {
    UsuarioForm
  },
  data() {
    return {
      criar: false,
      erros:[]
    }
  },
  methods: {
    async criarUsuario(event) {
      this.erros = [];
      const button = event.currentTarget;
      try {
        button.setAttribute('disabled','');
        button.value = 'Criando...';
        
        await this.$store.dispatch('criarUsuario', this.$store.state.usuario);
        await this.$store.dispatch('logarUsuario', this.$store.state.usuario);
        await this.$store.dispatch('getUsuario');
        this.$router.push({name: 'usuario'});
      }catch (erro){
        button.removeAttribute('disabled','');
        button.value ='Criar Usuário';
        
        if(erro.response && erro.response.data.message){
          this.erros.push(erro.response.data.message)
        }else{
          this.erros.push('Não foi possível realizar o cadastro!');
        }
      }
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>