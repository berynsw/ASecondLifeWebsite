<template>
    <nav>
        <router-link class="menuItem" to="./">Home</router-link>
        <router-link class="menuItem" to="./explore">Explore</router-link>
        <router-link class="menuItem" to="./resources">Resources</router-link>
        <router-link class="menuItem" to="./about">About</router-link>
        <router-link class="menuItem" to="./contact">Contact</router-link>
        <router-link class="menuItem" to="./writeup">Project Writeup</router-link>
    </nav>
</template>

<script>
export default {
    name: "TopNav"
}
</script>

<style scoped>
nav{
    width: 100vw;
    padding: 0px 0vw;
    background-color: #8dc59b;
    font-size: 1.8vw;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

    display: flex;
    /* align-items: center; */
    justify-content: left;
}
nav .menuItem{
    padding: 2vh 3.4vw;
    position: relative;
    text-align: center;
    border-bottom: .65vh solid transparent;
    border-top: 5px solid transparent;
    display: flex;
    transition: 0.4s;
}
nav .menuItem{
    color: inherit;
    text-decoration: none;
}

nav .menuItem.active, 
nav .menuItem:hover{
    background-color: #55667F;
    border-bottom-color: #3a4557;
}
</style>