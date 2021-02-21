<template>
    <div>
        <TopNav />
        <p>
            HELOOOWOWOWOWOW
        </p>
        <Footer />
    </div>

</template>

<script>
import Footer from './Footer.vue';

import TopNav from './TopNav.vue';

export default {
  name: 'Homepage',
  components: {
    Footer,
    //UpcycleSearch,
    //IdeaForm,
    TopNav
  }
}
</script>

<style scoped>
p{
    color: black;
    font-size: 77pt;
}
</style>