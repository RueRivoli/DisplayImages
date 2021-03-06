import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router/routes.js'
import store from './store/'
import './style/style.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
