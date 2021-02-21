<template>
    <div>
        <UpcycleSearch />
        <body>
           <div class="name">New to Upcycling?</div>
           <div class="img-boots"></div>
           <p class="text">Explore our mission and community. A Second Life is dedicated to reducing waste through simple upcycle projects. What's an upcycle? Don't know where to start? Learn more by clicking below.</p>
           <button class="NewUser" v-on:click="NewUser">New User Guide</button>

        </body>
        <IdeaForm />
    </div>
</template>

<script>

import UpcycleSearch from './UpcycleSearch.vue';
import IdeaForm from './IdeaForm.vue';

export default {
  name: 'Homepage',
  components: {
    UpcycleSearch,
    IdeaForm,
  }
}
</script>

<style scoped>
body{
    width: 100vw;
    height: 590px;
    padding: 50px 80px;
    background-color: #dad6ce;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
}
body .name{
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 800px;
    position: absolute;
    top: 50px;
    left: 100px;
}
body .text{
    font-size: 30px;
    width: 500px;
    position: absolute;
    top: 160px;
    left: 100px;
}
body .img-boots{
    background-image: url("../assets/boots.jpg");
    position: absolute;
    top: 100px;
    right:100px;
}
body .NewUser{
    width: 300px;
    height: 40px;
    margin: 25px 0px;
    border-radius: 25px;
    border: 5px solid transparent;
    border-color: #777;
    font-size: 20pt;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    opacity: 80%; 
    position: absolute;
    bottom:7px;
    left: 100px;
    transition: 0.4s;
}
body .NewUser.active, 
body .NewUser:hover{
    background-color: #555;
    border-color: #c58db7;
    opacity: 90%;
}

</style>