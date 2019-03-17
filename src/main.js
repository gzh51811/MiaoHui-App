import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import api from './api/routers/index.js'

import './assets/js/rem'
import axios from "axios";
import qs from "qs";


Vue.prototype.$ajax= axios;
Vue.prototype.$qs= qs;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

