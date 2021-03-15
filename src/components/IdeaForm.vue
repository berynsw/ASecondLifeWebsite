<template>
    <main>
        <section>
            <p class="name">Got an Upcycle Idea to Share?</p>
            <p class="text">Write your email and a message about your idea below</p>
        </section>
        
        
        <section>
            <input class="email" type="text" v-model="email" placeholder="Email..." />
        </section>
        <section>
            <input class="idea" type="text" v-model="idea" placeholder="Upcycle Idea..." />
        </section>
        <section>
            <button class="submit" v-on:click="submit">Submit</button>
        </section>
    </main>
</template>

<script>
export default {
    name: "IdeaForm",
    methods:{
        submit()
        {
            alert("Thank you for your upcycle idea!")
        }
    }
}
</script>

<style scoped>
main {
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #a3ceae;
    font-family: helvetica;
    position: relative;
    display: block;


}
main .name{
    font-size: 50px;
    font-family: rockwell;
    display: table;
    margin: 0 auto;

}
main .text{
    font-size: 30px;
    display: table;
    margin: 0 auto;
    padding-bottom: 2%;
}
main .email{
    width: 32%;
    height: 40px;
    border-radius: 25px;
    border-color: #777;
    /* box-shadow: -1px -1px #777; */
    font-size: 20pt;
    font-family: helvetica;
    text-align: center;
    opacity: 80%; 
    display: table;
    margin: 0 auto;
    


}
main .idea{
    width: 32%;
    height: 200px;


    border-radius: 25px;
    border-color: #777;
    /* box-shadow: -1px -1px #777; */

    font-size: 20pt;
    font-family: helvetica;
    text-align: center;
    opacity: 80%; 

    display: table;
    margin: 0 auto;
    padding-bottom: 25px;
}
main .submit{
    width: 10%;
    height: 10%;
    border-radius: 25px;
    border: 5px solid transparent;
    color: white;
    background-color:#48596C;
    border-color: #55667F;
    font-size: 20pt;
    font-family: rockwell;
    text-align: center;
    line-height: 50px;
    opacity: 80%; 

    display: table;
    margin: 0 auto;

    transition: 0.4s;
}
main .submit.active, 
main .submit:hover{
    border-color: #55667F;
    opacity: 90%;
}


</style>