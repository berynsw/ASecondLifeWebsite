<template>
    <div>
        <UpcycleSearch />
        <div class="newUserSection">
            <img :src="require(`@/assets/boots.jpg`)" class="boots" width= '400' height= '500'>
            <div class="name">New to Upcycling?</div>
            <p class="text">Explore our mission and community. A Second Life is dedicated to reducing waste through simple upcycle projects. What's an upcycle? Don't know where to start? Learn more by clicking below.</p>
            <router-link class="NewUser" to="./newuserguide">New User Guide</router-link>
        </div>
    </div>
</template>

<script>

    import UpcycleSearch from './UpcycleSearch.vue';

    export default {
        name: 'Homepage',
        components: {
            UpcycleSearch,
        }
    }
</script>

<style scoped>
.newUserSection {
    width: 100vw;
    height: 590px;
    padding: 50px 80px;
    background-color: #FAF2EC;
    /* background-color:rgb(245, 245, 220);  */
    color: rgb(25, 28, 46);
    font-family: 'Courier New', Courier, monospace;
    position: relative;
}
body .name{
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #48596C;
    width: 800px;
    position: absolute;
    top: 50px;
    left: 100px;
}
body .text{
    font-size: 30px;
    color: #48596C;
    width: 500px;
    position: absolute;
    top: 160px;
    left: 100px;
}
body .boots{
    background-image: url("../assets/boots.jpg");
    position: absolute;
    border-style: solid;
    border-color:#48596C;
    top: 50px;
    right:150px;
}
body .NewUser{
    width: 300px;
    height: 40px;
    margin: 25px 0px;
    border-radius: 25px;
    border: 5px solid;
    border-color:#48596C;
    font-size: 20pt;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    opacity: 80%; 
    position: absolute;
    bottom:20px;
    left: 100px;
    transition: 0.4s;
    color: #FAF2EC;
    background-color: grey;

    text-decoration: none;
}
body .NewUser.active, 
body .NewUser:hover{
    background-color: #48596C;
    color: white;
    border-color: #c58db7;
    opacity: 90%;
}

</style>