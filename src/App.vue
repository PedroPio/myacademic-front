<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/common/NavBar.vue'
import Login from './components/common/Login.vue'

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f6f6f6;
}
</style>
