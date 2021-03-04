import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Homepage from './components/Homepage.vue';
import NewUserGuide from './components/NewUserGuide.vue';
import Contact from './components/Contact.vue';
import Explore from './components/Explore.vue';

//upcycles
import UpcycleTemplate from './components/UpcycleTemplate.vue';
import RubberBootPlanter from './components/RubberBootPlanter.vue';
import RubberBootBirdhouse from './components/RubberBootPlanter.vue';
import CakePanSucculentGarden from './components/CakePanSucculentGarden.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Homepage},
  {path: '/about', component: About},
  {path: '/newuserguide', component: NewUserGuide},
  {path: '/contact', component: Contact},
  {path: '/explore', component: Explore},
  
  
  //upcycles
  {path: '/upcycletemplate', component: UpcycleTemplate},
  {path: '/rubberbootplanter', component: RubberBootPlanter},
  {path: '/rubberbootbirdhouse', component: RubberBootBirdhouse},
  {path: '/cakepansucculentgarden', component: CakePanSucculentGarden}

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
