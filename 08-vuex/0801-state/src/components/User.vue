<template>
  <p>User {{$store.state.aulasCompletas}}</p>
</template>

<script>
export default {
  name: "User",
  computed:{
    aulasCompletas() {
      return this.$store.state.aulasCompletas;
    }
  }
}
</script>

<style scoped>

</style>