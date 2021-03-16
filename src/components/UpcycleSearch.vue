<template>
    <main>
        <!-- <div class="name">A <br> Second <br> Life</div> -->
         <div class="background">
         
          <div class="banner-content">
            
            A <br> Second <br> Life
            
        </div>
        
         <div class="rightBox">
         <div id = 'dropdownlist' class="dropDown" >
             <h1 class="boxHeading">Know what you want to <br> upcycle ?</h1>
         </div>
         
         <router-link class="boxButton" to="./explore">Start Creating</router-link>
         <!-- <button @click="showText = !showText" class="boxButton">🔍 Search By Category</button> -->
         
         <!-- <div v-if="showText">
            

            <router-link class="menuItem" to="./MaterialCategories/Rubber/RubberBoots/RubberBootPlanter">Rubber Boots</router-link>
            <router-link class="menuItem" to="./MaterialCategories/Rubber/RubberBoots/RubberBootPlanter">Rubber Boots</router-link>
            
            <button @click="showHello = !showHello" class="optionButton">Plastic</button>
            <button @click="showHello = !showHello" class="optionButton">Metal</button>
            <button @click="showHello = !showHello" class="optionButton">Wood</button>
            

         </div> -->
         <h1 v-if="showHello">hello</h1>
         </div>
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
.background{
      background-image: url("../assets/homemadePaper.jpg");
     opacity: 0.8;
     background-size: cover;
     background-position: center center;
     background-repeat: no-repeat;
     display: flex;
     width: 100%;
     height: 100vh;
     
}
.banner-content {
  position: absolute;
  top: 20%;
  left: 5%;
  font-size: 100pt;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
/* main {
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-color: #8db7c5;
}
main .name{
    font-size: 80pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
        
} */

main .rightBox{
    margin-top: 7%;
    width: 550px;
    height: 350px;
    float: right;
    margin-left: 55%;
    background-color:white;
    border-radius: 70px 20px;
    position: relative;
    box-shadow: 20px 20px #888888;
    text-align: center;
    font-family: 'Karla';
    font-size: 1.3em;
    font-weight: bold;
}

main .boxHeading {
    position: absolute;
    color:gray;
    text-align: center;
    top: 30%;
    margin-left: 25px;

    
}
main .boxButton{
    width:450px;
    height: 40px;
    display: block;
    margin-top: 45%;
    margin-left: auto;
    margin-right: auto;
    background-color:white;
    border: 3px solid gray;
    color:gray;
    text-align: center;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20pt;
}
main .boxButton:hover {
  background-color: #555555;
  color: white;
 
}

main .boxButton.active, 
main .boxButton:hover{
    background-color: #48596C;
    border-color: #c58db7;
    opacity: 90%;
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