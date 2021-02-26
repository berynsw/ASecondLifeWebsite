import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Homepage from './components/Homepage.vue';
import NewUserGuide from './components/NewUserGuide.vue';
import Contact from './components/Contact.vue';

//upcycles
import RubberBootPlanter from './components/MaterialCategories/Rubber/RubberBoots/RubberBootPlanter.vue';

Vue.use(VueRouter);
const routes = [
  {path: '/', component: Homepage},
  {path: '/about', component: About},
  {path: '/newuserguide', component: NewUserGuide},
  {path: '/contact', component: Contact},
  
  
  //upcycles  
  {path: '/MaterialCategories/Rubber/RubberBoots/RubberBootPlanter', component: RubberBootPlanter}


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
