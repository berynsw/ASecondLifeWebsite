<template>
  <div id="app">
    <header>
      <TopNav />
    </header>
    <body>
      <router-view></router-view>
      <IdeaForm />
    </body>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import IdeaForm from './components/IdeaForm.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    IdeaForm,
    Footer, 
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
  align-content: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
