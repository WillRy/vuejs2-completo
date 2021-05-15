<template>
  <div id="app">
    <ModalPrincipal>
      <template v-slot:header>
        <h3>Cabeçalho</h3>
      </template>
      <template v-slot:default="{user}">
        <p>Usuário: {{user.name}}</p>
      </template>
      <template #footer>
        <p>Rodapé</p>
      </template>
    </ModalPrincipal>
  </div>
</template>
<script>
import ModalPrincipal from "./components/ModalPrincipal";
export default {
  name: 'app',
  components:{
    ModalPrincipal
  }
}
</script>
