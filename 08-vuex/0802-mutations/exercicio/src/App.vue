<template>
  <div id="app">
    <Aluno/>
    <Curso/>
  </div>
</template>
<script>
import Aluno from "./components/Aluno";
import Curso from "./components/Curso";
export default {
  name:'app',
  components: {Curso, Aluno},
}
</script>