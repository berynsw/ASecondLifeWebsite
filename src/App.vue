<template>
  <div id="app">

    <header>
      
      <!-- this is how you pass props from the json data to the upcycle template -->
      <UpcycleTemplate 
        :upcycleName=upcycles[0].upcycleName
        :imageName=upcycles[0].imageName
        :category=upcycles[0].category
        :itemName=upcycles[0].itemName
        :environmentalImpact=upcycles[0].environmentalImpact
        :supplies=upcycles[0].supplies
        :instructions=upcycles[0].instructions
      />


      <TopNav />
    </header>
    <body>
      <router-view></router-view>
    </body>
    <footer>
      <IdeaForm />
      <Footer />

    </footer>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import IdeaForm from './components/IdeaForm.vue';
import Footer from './components/Footer.vue';

//temporary
import UpcycleTemplate from './components/UpcycleTemplate.vue';


export default {
  name: 'App',
  components: {
    TopNav,
    IdeaForm,
    Footer, 

    //temporary
    UpcycleTemplate
  },
  
  //temporarily here
  //this is how we get the json data file
  data: function(){
    return {
      upcycles: []
    };
  },
  mounted(){
    fetch('http://localhost:3000/upcycles')
      .then(response => response.json())
      .then(data => this.upcycles = data)
      .catch(err => console.log(err.message))
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
