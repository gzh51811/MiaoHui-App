<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/reset.css';
//ElementUI以插件的形式来扩展vue的功能

import axios from 'axios';

//弹窗
// import {MessageBox} from 'mint-ui';
// Vue.prototype.$messagebox = MessageBox;

Vue.use(ElementUI);

axios.defaults.baseURL = 'http://39.105.177.247:5003/'
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
