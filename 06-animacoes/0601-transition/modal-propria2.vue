<template>
  <div>
    <button @click="modalAtiva = !modalAtiva">Abrir modal</button>
    <transition name="modal">
      <div class="modal-container" v-if="modalAtiva" @click.self="modalAtiva = false">
        <div class="modal">
          <p>teste</p>
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
export default {
  data() {
    return {
      modalAtiva: false
    }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  /*align-items: center;*/
  justify-content: center;
  
  overflow-y: scroll;
}

.modal {
  background: #fff;
  max-width: 650px;
  padding: 20px;
  width: 650px;
  margin: 120px;
  
  height: 650px;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .3s;
}

.modal-enter-to .modal {
  animation: fadeInDown 0.3s;
}

.modal-leave-to .modal {
  animation: fadeInDown 0.3s reverse;
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0px, 0);
  }
}

</style>