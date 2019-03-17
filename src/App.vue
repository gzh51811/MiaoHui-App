<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//ElementUI以插件的形式来扩展vue的功能

import axios from 'axios';
Vue.use(ElementUI);

Vue.prototype.$axios = axios;

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


ul,li {
  list-style: none;
}
</style>
