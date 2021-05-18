<template>
  <div>
    <PageLoading v-if="loading"/>
    <div v-if="api">
      <h2>{{api.nome}}</h2>
      <div class="video">
        <iframe
          :src="`https://www.youtube.com/embed/${api.youtube}`"
          :title="`${api.nome}`"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>  
      </div>
      
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Aula",
  props:['aula'],
  mixins:[fetchData],
  watch:{
    '$route.params.aula':function (){
      this.fetchData(`/aula/${this.aula}`);
    }
  },
  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
}
</script>

<style scoped>
.video{
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>