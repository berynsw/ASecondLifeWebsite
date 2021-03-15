<template>
    <div>
        <header>
            <div class="name">A <br> Second <br> Life</div>
        </header>
        <main>
            <div class="subject">Contact Us</div>
        </main>
        <body>
            <img :src="require(`@/assets/Map.png`)" class="map" width= '600' height= '400'>
            <div class="text">Find us in Bellingham, Washington. <br/> Email: ASecondLife@gmail.com</div>
        </body>
    </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
 header {
    width: 100vw;
    height: 500px;
    padding: 50px 80px;
    background-image: url("../assets/Rainbow.jpeg");
    background-size: 1500px 600px;
    position: relative;
}
header .name{
    font-size: 80pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
        
}

main .subject{
    font-family: rockwell;
    width: 100%;
    height: 120px;
    background-color:#8db7c5 ;
    font-size: 60px;
    text-align: center;
    line-height: 130px;
}
body{
    width: 100vw;
    height: 500px;
    background-color:#FAF2EC;
    position: relative;
}
body .text{
    font-size:20pt;
    font-family: helvetica;
    width: 600px;
    padding: 50px 50px;
    background-color:#8db7c5;
    border-style: solid;
    border-color:#48596C;
    position: absolute;
    top: 175px;
    right: 100px;
}
body .map{
    background-image: url("../assets/Map.png");
    border-style: solid;
    border-color:#48596C;
    position: absolute;
    top: 50px;
    left:100px;
}
</style>