<template>
    <div>
        <UpcycleSearch />
        <IdeaForm />
    </div>
</template>

<script>

import UpcycleSearch from './UpcycleSearch.vue';
import IdeaForm from './IdeaForm.vue';

export default {
  name: 'Homepage',
  components: {
    UpcycleSearch,
    IdeaForm,
  }
}
</script>

<style scoped>

</style>