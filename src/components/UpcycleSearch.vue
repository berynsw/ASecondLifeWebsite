<template>
    <main>
        <div class="name">A <br> Second <br> Life</div>
         <div class="rightBox">
         <div id = 'dropdownlist' class="dropDown" >
             <h1 class="boxHeading">Know what you want to <br> upcycle ?</h1>
         </div>
         <button @click="showText = !showText" class="boxButton">🔍 Search By Category</button>
         
         <div v-if="showText">
            
            <!-- obviously haven't formatted this correctly in the dropdown but wanted to see if it would work! -->
            <router-link class="menuItem" to="./items/rubberboots">Rubber Boots</router-link>
            
            <button @click="showHello = !showHello" class="optionButton">Plastic</button>
            <button @click="showHello = !showHello" class="optionButton">Metal</button>
            <button @click="showHello = !showHello" class="optionButton">Wood</button>
            

         </div>
         <h1 v-if="showHello">hello</h1>
         </div>
        <!-- <input class="search" type="text" v-model="search" placeholder="🔍 What do you want to upcycle?" /> -->
    </main>
</template>

<script>
// import Vue from 'vue';
// import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
// Vue.use(DropDownListPlugin);

export default {
    name: "UpcycleSearch",

    data: function(){
        return {
            showText: false,
            showHello: false,
            // localData: [
            //     {Id: 'upcycle1', Type: 'Plastic'},
            //     {Id: 'upcycle2', Type: 'Metal'},
            //     {Id: 'upcycle3', Type: 'Cloth'}
            // ],
            // localField: {value: 'Id', text: 'Type'}
        }
    }

}
</script>

<style scoped>
/* @import url(https://cdn.syncfusion.com/ej2/material.css); */
main {
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-color: #8db7c5;
}
main .name{
    font-size: 80pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
        
}

main .rightBox{
    margin-top: 30px;
    width: 550px;
    height: 350px;
    float: right;
    background-color: #FAF2EC;
    position: relative;
    box-shadow: 20px 20px #888888;
}

main .boxHeading {
    position: absolute;
    color:gray;
    text-align: center;
    top: 30%;
    margin-left: 50px;

    
}
main .boxButton{
    width:450px;
    height: 30px;
    display: block;
    margin-top: 45%;
    margin-left: auto;
    margin-right: auto;
    background-color:gray;
    color: honeydew;
    font-weight: bold;
    border: gray;
}
main .optionButton{
    display:block;
    width:450px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color:rgb(245, 245, 220); 
    color:gray;
    font-weight: bold;
    border: rgb(245, 245, 220);
}

main .dropDown {

    width:450px;
    display: block;
    margin-top: 45%;
    margin-left: auto;
    margin-right: auto;
    background-color:beige;
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