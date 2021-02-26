<template>
    <div>
        <header>
            <div class="name">A <br> Second <br> Life</div>
        </header>
        <main>
            <div class="subject">About Us</div>
        </main>
        <body>
            <div class="name">Our Mission</div>
            <p class="text">Our Mission is to educate, inspire, and encourage upcycling in order to take steps towards a more sustainable life, and a cleaner Earth.</p>
            <img :src="require(`@/assets/Field.jpeg`)" class="field" width= '400' height= '500'>
        </body>
    </div>

</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
header {
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-image: url("../assets/Garden.jpeg");
    background-size: 1440px 960px;
    position: relative;
}
header .name{
    font-size: 100pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
}
main {
    width: 100vw;
    height:100px;
    padding:50px 80px;
    background-color: #8db7c5;
    position: relative;
}
main .subject{
    font-size: 50pt;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    left: 500px;
    top: 10px;
}
body{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
}
body .name{
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
    width: 800px;
    position: absolute;
    top: 50px;
    left: 100px;
}
body .text{
    font-size: 30px;
    color: white;
    width: 500px;
    position: absolute;
    top: 160px;
    left: 100px;
}
body .field{
    /* background-image: url("../assets/Field.jpeg"); */
    position: absolute;
    border-style: solid;
    border-color:#48596C;
    bottom: 50px;
    left: 800px;
}
</style>