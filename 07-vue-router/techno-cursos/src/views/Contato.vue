<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-if="api">
      <h1>Contato</h1>
      {{ api }}
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
export default {
  name: "Contato",
  mixins:[fetchData],
  created() {
    this.fetchData('/contato');
  }
}
</script>

<style scoped>

</style>