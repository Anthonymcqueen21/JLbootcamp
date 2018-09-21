import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router'

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
});