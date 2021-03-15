<template>
    <main>
        <div class="name">A Second Life</div>
        <nav>
            <router-link class="menuItem" to="./">Home</router-link>
            <router-link class="menuItem" to="./explore">Explore</router-link>
            <router-link class="menuItem" to="./resources">Resources</router-link>
            <router-link class="menuItem" to="./about">About</router-link>
            <router-link class="menuItem" to="./contact">Contact</router-link>
        </nav>
    </main>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
main{
    width: 100vw;
    height: 300px;
    padding: 50px 80px;
    background-color: #8db7c5;
    border-top: 1px solid #A7CFB5;
    position: relative;
}
main .name{
    font-size: 50pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 200px;
    position: absolute;
    top: 40px;
    left: 50px;
}
nav{
    width: 20vw;
    padding: 0px 50px;
    position: absolute;
    top: 60px;
    left: 300px;
    background-color: #8db7c5;
    font-size: 18pt;
    font-family: helvetica;
    justify-content: left;
}
nav .menuItem{
    padding: 5px 5px;
    position: relative;
    text-align: center;
    border-left: 4px solid transparent;
    display: flex;
    transition: 0.4s;
    color: white;
    text-decoration: none;
}
nav .menuItem.active, 
nav .menuItem:hover{
    border-bottom-color: #55667F;
    opacity: 90%;
}

nav .menuItem.active, 
nav .menuItem:hover{
    /* background-color: #555; */
    border-left-color: #55667F;
    opacity: 90%;
    color: black;
}


</style>