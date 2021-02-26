<template>
    <div>
        <title>
            Rubber Boot Birdhouse
        </title>
        <p1>
            <img :src="require(`@/components/MaterialCategories/images/boots.jpg`)">
            <info>
                <span style="font-weight:bold">Category: </span>Rubber
                <br/>
                <br/>
                <span style="font-weight:bold">Item: </span>Rubber Boot
                <br/>
                <br/>
                <span style="font-weight:bold">Environmental Impact: </span>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam
                <br/>
                <br/>
                <span style="font-weight:bold">Supplies: </span>old rubber boot(s), potting soil, small outdoor plant

            </info>
        </p1>
        <instructions>
            <span style="font-weight:bold">Instructions: </span>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </instructions>
    </div>
</template>

<script>
export default {
  name: 'RubberBootBirdhouse',
}
</script>


<style scoped>
div{
    color: black;
}
title{
    font-size: 60pt; 
}
p1{
    font-size: 30pt;
}
instructions{
    font-size: 30pt; 
}
</style>