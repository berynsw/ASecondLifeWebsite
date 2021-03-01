<template>
    <main>
        <section class="title">
            Rubber Boot Planter
        </section>
        <section class="info">
            <img :src="require(`@/assets/boots.jpg`)">
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
        </section>
        <section class="instructions">
            <br/>
            <br/>
            <span style="font-weight:bold">Instructions: </span>
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>


    </main>
</template>

<script>
export default {
  name: 'RubberBootPlanter',
}
</script>


<style scoped>
main{
    color: #48596C;
    background-color: #FAF2EC;
}

.title{
    font-size: 60pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; 
    padding-top: 40px;
    padding-bottom: 40px;
}
.info{
    display:block;
    font-size: 20pt; 
    font-family: 'Courier New', Courier, monospace;
}
.info img{
    border-style: solid;
    border-color:#48596C;
    height: 500px;
    float: left;
    margin-right: 20px;

}
.instructions{
    display: block;
    height: 300px;
    font-size: 20pt; 
    font-family: 'Courier New', Courier, monospace;
}



</style>