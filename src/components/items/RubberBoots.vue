<template>
    <div>
        <p>
            i'm an item page
            <img :src="require(`@/components/items/images/boots.jpg`)">
        </p>
    </div>

</template>

<script>
export default {
  name: 'item1',
}
</script>

<style scoped>
p{
    color: black;
    font-size: 77pt;
}
</style>