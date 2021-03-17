<template>
    <main>
        <div class="namewrap">
            <div class="name">
                A Second Life
            </div>
        </div>
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
    height: 26vh;
    background-color: #8db7c5;
    display: table;
    vertical-align: middle;
    column-count: 2;
    column-width: 2vw;
    column-gap: 2vw;
}
.namewrap{
    display: table-cell;
    vertical-align: middle;

    width: .2vw;

}
main .name{
    font-size: 2.7vw;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: .7vw;

    display: flex;
    margin-left: 2vw;
}
nav{
    width: 20vw;

    background-color: #8db7c5;
    font-size: 1.1vw;
    font-family: helvetica;

    display: table-cell;
    vertical-align: middle;
    
}
nav .menuItem{
    padding: .4vh 5px;
    border-left: .2vw solid transparent;
    display: flex;
    transition: 0.4s;
    color: white;
    text-decoration: none;

}


nav .menuItem.active, 
nav .menuItem:hover{
    border-left-color: #55667F;
    color: black;
}


</style>