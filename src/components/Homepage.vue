<template>
    <div>
        <UpcycleSearch />
        <main>
            <div class="UpofWeek">Upcycles of the Week</div>
        </main>
        <Carousel />
        <div class="newUserSection">
            <img :src="require(`@/assets/boots.jpg`)" class="boots">
            <div class="name">New to Upcycling?</div>
            <p class="text">Explore our mission and community. A Second Life is dedicated to reducing waste through simple upcycle projects. What's an upcycle? Don't know where to start? Learn more by clicking below.</p>
            <router-link class="NewUser" to="./newuserguide">New User Guide</router-link>
        </div>
    </div>
</template>

<script>
    import UpcycleSearch from './UpcycleSearch.vue';
    import Carousel from './Carousel.vue';
    export default {
        name: 'Homepage',
        components: {
            UpcycleSearch,
            Carousel,
        }
    }
</script>

<style scoped>
main .UpofWeek{
    width: 100%;
    height: 14vh;
    background-color:#8db7c5 ;
    font-size: 4vw;
    text-align: center;
    line-height: 14vh;
    font-family: rockwell, bold;
}
.newUserSection {
    width: 100vw;
    height: 590px;
    padding: 50px 80px;
    background-color: #FAF2EC;
    color: rgb(25, 28, 46);
    font-family: helvetica;
    position: relative;
}
body .name{
    font-size: 3vw;
    font-family: rockwell;
    color: #48596C;
    width: 40vw;
    position: absolute;
    top: 5.5vh;
    left: 7vw;
}
body .text{
    font-size: 1.5vw;
    color: #48596C;
    width: 35vw;
    position: absolute;
    top: 16vh;
    left: 7vw;
}
body .boots{
    background-image: url("../assets/boots.jpg");
    position: absolute;
    border-style: solid;
    border-color:#48596C;
    top: 5vh;
    right: 10vw;
    width: 15vw;
    height: 44vh;
}
body .NewUser{
    width: 17vw;
    height: 5vh;
    margin-bottom: 3vh;
    border-radius: 40px;
    border: 5px solid transparent;
    font-size: 1.4vw;
    font-family: rockwell;
    text-align: center;
    vertical-align: middle;
    

    position: absolute;
    bottom: 3vh;
    left: 7vw;
    transition: 0.4s;
    color: white;
    background-color: #55667F;
    text-decoration: none;
    line-height: 5vh;
    display: table;

}
body .NewUser.active, 
body .NewUser:hover{
    border-color: #3a4557;
}

</style>