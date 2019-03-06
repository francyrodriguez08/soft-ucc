<template>
  <div id="app">
    <Menu/>
    <!-- <Home/> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Menu,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
