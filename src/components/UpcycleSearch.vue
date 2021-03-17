<template>
    <main>
        <div class="background">
            <div class="banner-content">
                A <br> Second <br> Life
            </div>
            <div class="rightBox">
                <div id = 'dropdownlist' class="dropDown" > 
                    <h1 class="boxHeading">Know what you want to upcycle?</h1>
                </div>
                <router-link class="boxButton" to="./explore">
                    Start Creating
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>


export default {
    name: "UpcycleSearch",
}
</script>

<style scoped>
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
  font-size: 9vw;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}


main .rightBox{
    margin-top: 13%;
    width: 32vw;
    height: 40vh;
    float: right;
    margin-left: 55%;
    background-color:white;
    border-radius: 5vh .6vw;
    position: relative;
    box-shadow: 1.3vw 1.3vw #888888;
    text-align: center;
    font-family: helvetica;
    font-weight: bold;
    display: block;
}


main .boxButton{
    width: 23vw;
    height: 5vh;

    margin-top: 7vh;
    margin-left: auto;
    margin-right: auto;
    background-color:#55667F;
    border: .6vh solid transparent;
    color:white;
    text-align: center;
    text-decoration: none;
    font-family: helvetica;
    font-size: 1.4vw;
    line-height: 4vh;
    display: table;
}


main .boxButton.active, 
main .boxButton:hover{

    border-bottom-color: #3a4557;
}

main .dropDown {
    text-align: center;
    width: 28vw;
    display: table;

    color:gray;


    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
}
main .boxHeading {

    color:gray;
    text-align: center;

    display: table;
    margin-top: 5vh;

    margin: 0 auto; 
    font-size: 2vw;
}

</style>