<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{margin: 0;padding: 0;}
html,body{
  height: 100%;
}
ul li {
  list-style: none;
}
</style>
