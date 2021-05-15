<template>
  <form action="#">
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" v-model="nome">
    <label for="email">Email</label>
    <input type="text" name="email" id="email" v-model="email">
    <label for="mensagem">Mensagem</label>
    <textarea name="mensagem" id="mensagem" cols="30" rows="10" v-model="mensagem"></textarea>
  </form>
</template>

<script>
export default {
  name: "FormularioContato",
  data() {
    return {
      nome: '',
      email: '',
      mensagem: ''
    }
  }
}
</script>

<style scoped>
label, input, textarea {
  display: block;
}

label {
  margin-bottom: 5px;
}
</style>