<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>  
      <router-link to="/cursos">Cursos</router-link>  
      <router-link to="/acoes">Ações</router-link>  
    </nav>
    <transition mode="out-in">
      <router-view></router-view>      
    </transition>

  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
  border: 4px solid #234;
  margin: 20px;
  padding: 20px;
}

nav{
  padding: 20px 0;
}

a{
  color: #234;
  padding: 10px;
}
.router-link-exact-active{
  color: #4b8;
  font-weight: bold;
}

.v-enter,.v-leave-to{
  opacity: 0;
  transform: translate3d(-20px,0,0);
}
.v-enter-active,.v-leave-active{
  transition: all 0.3s;
}
</style>