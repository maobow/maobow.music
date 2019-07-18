import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './js/router.js'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import './common/css/animate.css'

Vue.use(VueRouter);

import './js/icon.js'
new Vue({
  el: '#app',
  render: h => h(App),
	router
})
