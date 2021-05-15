<template>
<div>
  <p>{{num}}</p>
  <p>Faça o download dos arquivos</p>
  <button>Download</button>
</div>
</template>

<script>
export default {
  name: "AulaDownload",
  data(){
    return {
      num: (Math.random() * 100).toFixed(2)
    }
  },
  destroyed() {
    console.log('Download destruido')
  }
}
</script>

<style scoped>

</style>