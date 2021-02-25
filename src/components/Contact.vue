<template>
    <div>
        <header>
            <div class="name">A <br> Second <br> Life</div>
        </header>
        <main>
            <div class="subject">Contact Us</div>
        </main>
            <p>insert map here</p>
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
p{
    color: black;
    font-size: 25pt;
}
</style>