<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Menu /> -->
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
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
