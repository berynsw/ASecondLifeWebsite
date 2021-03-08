import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Resources from './components/Resources.vue';
import Homepage from './components/Homepage.vue';
import NewUserGuide from './components/NewUserGuide.vue';
import Contact from './components/Contact.vue';
import Explore from './components/Explore.vue';

//upcycles
import UpcycleTemplate from './components/UpcycleTemplate.vue';


Vue.use(VueRouter);

const routes = [
  {path: '/', component: Homepage},
  {path: '/about', component: About},
  {path: '/resources', component: Resources},
  {path: '/newuserguide', component: NewUserGuide},
  {path: '/contact', component: Contact},
  {path: '/explore', component: Explore},
  
  

  //upcycles
  {
    path: '/:name', 
    component: UpcycleTemplate
  }

]
const router = new VueRouter({
  mode: 'history',
  routes
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
