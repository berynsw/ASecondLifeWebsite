import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Plastic from './components/Plastic.vue';
import UpcycleSearch from './components/UpcycleSearch.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/plastic', component: Plastic},
  { path: '/', component: UpcycleSearch}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
