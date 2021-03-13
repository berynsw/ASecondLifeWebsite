<template>
    <div>
        <UpcycleSearch />
        <main>
            <div class="UpofWeek">Upcycles of the Week</div>
        </main>
        <carousel
            @next="next"
            @prev="prev"
        >
            <carousel-slide v-for="(slide,index) in slides"
                 :key="slide"
                 :index="index"
                 :visibleSlide="visibleSlide">
                <img :src="slide" />
            </carousel-slide>
        </carousel>
        <div class="newUserSection">
            <img :src="require(`@/assets/boots.jpg`)" class="boots" width= '400' height= '500'>
            <div class="name">New to Upcycling?</div>
            <p class="text">Explore our mission and community. A Second Life is dedicated to reducing waste through simple upcycle projects. What's an upcycle? Don't know where to start? Learn more by clicking below.</p>
            <router-link class="NewUser" to="./newuserguide">New User Guide</router-link>
        </div>
    </div>
</template>

<script>

    import UpcycleSearch from './UpcycleSearch.vue';
    import CarouselSlide from './CarouselSlide.vue';
    import Carousel from './Carousel.vue';
    export default {
        data(){
            return{
                slides: [
                    "@/assets/homemadePaper.jpg", 
                    "@/assets/homemadePaper.jpg",
                    "@/assets/dogTreatDispenser.jpg",
                    "@/assets/cakePanSucculentGarden.jpg"
                ],
                visibleSlide : 0,
            }
        },
        computed: {
            slidesLen(){
                return this.slides.length;
            }
        },
        methods: {
            next(){
                if(this.visibleSlide >= this.slides.length -1){
                    this.visibleSlide = 0;
                }else{
                    this.visibleSlide++;
                }
            },
            prev(){
                if(this.visibleSlide <=0){
                    this.visibleSlide = this.slides.length -1;
                }else{
                    this.visibleSlide--;
                }
            }
        },
        name: 'Homepage',
        components: {
            UpcycleSearch,
            Carousel,
            CarouselSlide,
        }
    }
</script>

<style scoped>
main .UpofWeek{
    font-size: 50px;
    width:100vw;
    background-color: #8db7c5;
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.newUserSection {
    width: 100vw;
    height: 590px;
    padding: 50px 80px;
    background-color: #FAF2EC;
    /* background-color:rgb(245, 245, 220);  */
    color: rgb(25, 28, 46);
    font-family: 'Courier New', Courier, monospace;
    position: relative;
}
body .name{
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #48596C;
    width: 800px;
    position: absolute;
    top: 50px;
    left: 100px;
}
body .text{
    font-size: 30px;
    color: #48596C;
    width: 500px;
    position: absolute;
    top: 160px;
    left: 100px;
}
body .boots{
    background-image: url("../assets/boots.jpg");
    position: absolute;
    border-style: solid;
    border-color:#48596C;
    top: 50px;
    right:150px;
}
body .NewUser{
    width: 300px;
    height: 40px;
    margin: 25px 0px;
    border-radius: 25px;
    border: 5px solid;
    border-color:#48596C;
    font-size: 20pt;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    opacity: 80%; 
    position: absolute;
    bottom:20px;
    left: 100px;
    transition: 0.4s;
    color: #FAF2EC;
    background-color: grey;
    text-decoration: none;
}
body .NewUser.active, 
body .NewUser:hover{
    background-color: #48596C;
    color: white;
    border-color: #c58db7;
    opacity: 90%;
}

</style>