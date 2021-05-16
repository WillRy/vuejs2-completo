<template>
  <div>
    <h2>Lista de aulas: {{curso}}</h2>
    <ul>
      <li>Aula 1</li>
      <li>Aula 2</li>
      <li>Aula 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CursoAulas",
  props:['curso']
}
</script>

<style scoped>

</style>