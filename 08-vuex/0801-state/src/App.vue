<template>
  <div id="app">
    {{$store.state.user}}
    <User/>
    <Curso/>
  </div>
</template>
<script>
import User from "./components/User";
import Curso from "./components/Curso";

export default {
  name: 'app',
  components:{
    Curso,
    User
  }
}
</script>
