<template>
  <div id="app">
    <header>
      <TopNav />
    </header>
    <body>
      <UpcycleSearch />
      <Idea-Form />
    </body>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import UpcycleSearch from './components/UpcycleSearch.vue';
import IdeaForm from './components/IdeaForm.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    TopNav,
    UpcycleSearch,
    IdeaForm,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
</style>
