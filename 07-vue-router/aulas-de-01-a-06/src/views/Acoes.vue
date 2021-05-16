<template>
  <div>
    <h2>Ações</h2>
    <router-link :to="{name:'acao',params:{simbolo:'aapl'}}">Apple</router-link>
    <router-link :to="{name:'acao',params:{simbolo:'amzn'}}">Amazon</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Acoes"
}
</script>

<style scoped>

</style>