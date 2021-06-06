<template>
  <div class="input-wrapper">
    <label :for="id" v-if="label">{{label}}</label>
    <input
        :id="id"
        :name="name"
        :type="type"
        :value="value"
        @input="onInput"
        @change="onChange"
        @keyup="onKeyup"
    >
  </div>
</template>

<script>
export default {
  name: "CustomInputModel",
  props:['id','name','type','label','value'],
  methods:{
    onInput(event){
      this.$emit('input', event.target.value)
    },
    onChange(event) {
      this.$emit('onChange', event.target.value);
    },
    onKeyup(event){
      this.$emit('onKeyup',event);
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