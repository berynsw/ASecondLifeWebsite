import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Homepage from './components/Homepage.vue';
import NewUserGuide from './components/NewUserGuide.vue';
// import Plastic from './components/Plastic.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Homepage},
  {path: '/about', component: About},
  {path: '/newuserguide', component: NewUserGuide}
    // path: '/plastic', component: Plastic,
]

const router = new VueRouter({
  mode: 'history',
  routes
});



Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
