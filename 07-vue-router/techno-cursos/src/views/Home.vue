<template>
  <div>
    <PageLoading v-if="loading"/>
    <div v-if="api">
      <h1>Home</h1>
      {{ api }}
    </div>
  </div>
</template>
<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: 'home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  }
}
</script>
