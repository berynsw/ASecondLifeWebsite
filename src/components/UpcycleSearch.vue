<template>
    <main>
        <div class="name">A Second Life</div>
        <input class="search" type="text" v-model="search" placeholder="🔍 What do you want to upcycle?" />
    </main>
</template>

<script>
export default {
    name: "UpcycleSearch"
}
</script>

<style scoped>
main {
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-color: #8db7c5;
}
main .name{
    font-size: 80pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 400px;
}
main .search{
    width: 550px;
    height: 40px;
    margin: 25px 0px;
    padding: 25px 0px;
    border-radius: 25px;
    border-color: #777;
    box-shadow: -1px -1px #777;
    font-size: 20pt;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    opacity: 80%;
}

</style>