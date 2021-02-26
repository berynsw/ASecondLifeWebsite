<template>
    <div>
        <header>
            <div class="name">A <br> Second <br> Life</div>
        </header>
        <main>
            <div class="subject">Explore Upcycles by Material</div>


        </main>
            <test class="upcycleLinkTest">
                I'm just putting a link here so I can test an upcycle:
                <router-link class="boxButton" to="./MaterialCategories/Rubber/RubberBoots/RubberBootPlanter">Rubber Boot Planter</router-link>
            </test>
    </div>
</template>

<script>
export default {
    name: 'Explore'
}
</script>

<style scoped>
test{
    color:black;
    font-size: 30pt;
}

header {
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-image: url("../assets/worktable.jpg");
    background-size: 1440px 810px;
    position: relative;
}
header .name{
    font-size: 100pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
    color:#48596C;
}
main {
    width: 100vw;
    height:100px;
    padding:50px 80px;
    background-color: #8db7c5;
    position: relative;
}
main .subject{
    font-size: 50pt;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    left: 300px;
    top: 10px;
}
</style>