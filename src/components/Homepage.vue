<template>
    <div>
        <TopNav />
        <UpcycleSearch />
        <IdeaForm />
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer.vue';
import UpcycleSearch from './UpcycleSearch.vue';
import IdeaForm from './IdeaForm.vue';
import TopNav from './TopNav.vue';

export default {
  name: 'Homepage',
  components: {
    Footer,
    UpcycleSearch,
    IdeaForm,
    TopNav
  }
}
</script>

<style scoped>

</style>