<template>
  <div class="modal">
    <slot name="header"></slot>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'ModalPrincipal',
  data(){
    return {
      user: {
        name: 'Fulano'
      }
    }
  }
}
</script>
<style></style>