<template>
  <div class="input-wrapper">
    <label :for="id" v-if="label">{{label}}</label>
    <textarea
        :id="id"
        :name="name"
        @input="onInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "CustomTextArea",
  props:['id','name', 'label','value'],
  methods:{
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<style scoped>
.input-wrapper{
  display: grid;
  align-items: center;
  margin-bottom: 15px;
}

label{
  margin-bottom: 10px;
}

input, textarea {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}
input:hover, textarea:hover,
input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border: 1px solid #87f;
}
</style>