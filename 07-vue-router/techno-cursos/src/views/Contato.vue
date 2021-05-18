<template>
  <div>
    <PageLoading v-if="loading"/>
    <transition mode="out-in">
      <div v-if="api">
        <h1>Contato</h1>
        {{ api }}
      </div>
    </transition>
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