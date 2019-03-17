<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './pages/Home.vue'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);


export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  // margin-top: 60px;
}
*{margin: 0;padding: 0;}
html,body{
  height: 100%;
}


ul li {
  list-style: none;
}
</style>
