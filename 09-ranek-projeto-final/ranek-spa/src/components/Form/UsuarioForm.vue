<template>
  <form @submit.prevent="submitForm">
    <div v-if="mostrarDadosLogin" class="usuario">
      <CustomInputModel id="nome" name="nome" type="text" label="Nome" v-model="form.nome"/>

      <CustomInputModel id="email" name="email" type="email" label="Email" v-model="form.email"/>

      <CustomInputModel id="senha" name="senha" type="password" label="Senha" v-model="form.senha"/>
    </div>

    <CustomInputModel type="text" name="cep" id="cep" v-model="form.cep" label="Cep" @onKeyup="preencherCep"/>

    <CustomInputModel type="text" name="rua" id="rua" label="Rua" v-model="form.rua"/>

    <CustomInputModel type="text" name="numero" id="numero" label="Numero" v-model="form.numero"/>

    <CustomInputModel type="text" name="bairro" id="bairro" label="Bairro" v-model="form.bairro"/>

    <CustomInputModel type="text" name="cidade" id="cidade" label="Cidade" v-model="form.cidade"/>

    <CustomInputModel type="text" name="estado" id="estado" label="Estado" v-model="form.estado"/>

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import {api, getCep} from "../../services";
import CustomInputModel from "./CustomInputModel";


export default {
  name: "UsuarioForm",
  props:['preload'],
  components: {CustomInputModel},
  data() {
    return {
      form: {
        'nome': "",
        'email': "",
        'senha': "",
        'cep': "",
        'rua': "",
        'numero': "",
        'bairro': "",
        'cidade': "",
        'estado': ""
      }
    }
  },
  computed: {
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === 'usuario-editar';
    }
  },
  methods: {
    preencherCep() {
      const cep = this.form.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.form.rua = response.data.logradouro;
          this.form.bairro = response.data.bairro;
          this.form.cidade = response.data.localidade;
          this.form.estado = response.data.uf;
        });
      }
    },
    fetchUsuario() {
      if(this.preload){
        api.get('/usuario').then(r => {
          this.form = Object.assign(this.form, r.data);
        })
      }
    },
    submitForm() {
      this.$emit('submitForm', this.form);
    }
  },
  created() {
    this.fetchUsuario();
  }
}
</script>

<style scoped>
form, .usuario {
  display: grid;
  align-items: center;
}

.button {
  max-width: 200px;
  justify-self: center;
  margin-top: 10px;
}
</style>