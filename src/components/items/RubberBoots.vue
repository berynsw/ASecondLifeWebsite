<template>
    <div class="wrapper">
        <div>
        <img class="background" :src="require(`@/components/items/images/wood.jpg`)">
          <div class="banner-content">
            
            A <br> Second <br> Life
            
        </div>

         <!-- <div class="rightBox">
             <p>Welcome to Wood UpcycleSearch!</p>

         </div> -->
        </div>
        <div class="woodUpcycleHeading">
            <p>| Explore Wood Upcycles! |</p>

        </div>
        <!-- <p>
            i'm an item page
            <img :src="require(`@/components/items/images/boots.jpg`)">
        </p> -->
    </div>

</template>

<script>
export default {
  name: 'item1',
}
</script>

<style scoped>
/* .wrapper {
	line-height: 200%;
	margin: auto;
} */
.background{
     background-color: rgba(76, 175, 80, 0.3);
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
  top: 25%;
  left: 10%;
  font-size: 80pt;
  
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.woodUpcycleHeading{
     width: 100%;
    height: 100px;
    background-color:#8db7c5 ;
    font-size: 40pt;
    text-align: center;
    font-family: Bree Serif;
}
.rightBox{
    margin-top: 30px;
    opacity: 0.5;
    width: 550px;
    height: 350px;
    top: 25%;
    right: 10%;
    background-color:rgb(0, 0, 0); 
    position: absolute;
    
}
/* p{
    color: black;
    font-size: 77pt;
} */
</style>