<template>
    <main>
        <div class="name">Got an Upcycle Idea to Share?</div>
        <p class="text">Write your email and a message about your idea below</p>
        <input class="email" type="text" v-model="email" placeholder="Email..." />
        <input class="idea" type="text" v-model="idea" placeholder="Upcycle Idea..." />
    </main>
</template>

<script>
export default {
    name: "IdeaForm"
}
</script>

<style scoped>
main{
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-color: #8dc59b;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
}
main .name{
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 800px;
    position: absolute;
    top: 50px;
    left: 400px;
}
main .text{
    font-size: 30px;
    width: 1000px;
    position: absolute;
    top: 125px;
    left: 225px;

}
main .email{
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
    position: absolute;
    top:200px;
    left: 400px;
}
main .idea{
    width: 550px;
    height: 200px;
    margin: 25px 0px;
    padding: 25px 0px;
    border-radius: 25px;
    border-color: #777;
    box-shadow: -1px -1px #777;
    font-size: 20pt;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    opacity: 80%; 
    position: absolute;
    bottom: 50px;
    left: 400px;
}


</style>