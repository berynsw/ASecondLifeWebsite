<template>
    <nav>
        <router-link class="menuItem" to="./">Home</router-link>
        <router-link class="menuItem" to="./explore">Explore</router-link>
        <router-link class="menuItem" to="./resources">Resources</router-link>
        <router-link class="menuItem" to="./about">About</router-link>
        <router-link class="menuItem" to="./contact">Contact</router-link>
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
    padding: 0px 50px;
    background-color: #8dc59b;
    font-size: 24pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

    display: flex;
    /* align-items: center; */
    justify-content: left;
}
nav .menuItem{
    padding: 25px 80px;
    position: relative;
    text-align: center;
    border-bottom: 5px solid transparent;
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