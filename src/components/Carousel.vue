<template>
    <div class="carousel">
        <!-- <slot></slot> -->

        <button @click="next" class="next">Next &#9654;</button>

            <div class="grid-container">
                <div id="left" class="slide" >
                    <router-link v-if='leftUpcycle' class="link" :to="`./${leftUpcycle.upcycleName}`">
                        <div>{{leftUpcycle.upcycleName}}</div>
                        <img :src="require(`@/assets/${leftUpcycle.imageName}`)">
                    </router-link>
                </div>
                <div id="middle" class="slide">
                    <router-link class="link" :to="`./${midUpcycle.upcycleName}`">
                        <div>{{midUpcycle.upcycleName}}</div>
                        <img :src="require(`@/assets/${midUpcycle.imageName}`)">
                    </router-link>
                </div>
                <div id="right" class="slide">
                    <router-link v-if='rightUpcycle' class="link" :to="`./${rightUpcycle.upcycleName}`">
                        <div>{{rightUpcycle.upcycleName}}</div>
                        <img :src="require(`@/assets/${rightUpcycle.imageName}`)">
                    </router-link>
                </div>
            </div>

        <button @click="prev" class="prev">&#9664; Prev</button>

    </div>
</template>

<script>
export default {
    data(){
        return{
            i: 0,
            leftUpcycle: {},
            midUpcycle: {},
            rightUpcycle: {},
            upcycles: []  
        }
    },
    methods: {
        next(){
            if(this.i != this.upcycles.length-1){
                this.i++;
                
                this.leftUpcycle = this.upcycles[this.i-1];
                this.midUpcycle = this.upcycles[this.i];
                //don't show right upcycle if we are at end of array
                if(this.i == this.upcycles.length-1){
                    this.rightUpcycle = null;
                }
                else{
                    this.rightUpcycle = this.upcycles[this.i+1];
                }
            }
        },
        prev(){
            if(this.i != 0){
                this.i--;
                
                //don't show left upcycle if we are at end of array
                if(this.i == 0){
                    this.leftUpcycle = null;
                }
                else{
                    this.leftUpcycle = this.upcycles[this.i-1];
                }
                this.midUpcycle = this.upcycles[this.i];
                this.rightUpcycle = this.upcycles[this.i+1];

            }
        }
    },
    mounted(){
      fetch('http://localhost:3000/upcycles')
        .then(response => response.json())
        .then(data => {
          this.upcycles = data;
          this.i = 1;
          this.leftUpcycle = this.upcycles[this.i-1];
          this.midUpcycle = this.upcycles[this.i];
          this.rightUpcycle = this.upcycles[this.i+1];
        })
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
    .carousel{
        position:relative;
        width:100vw;
        height:400px;
        overflow:hidden;
        background-color: #a3ceae;
        position: relative;
        vertical-align: middle;
    }
    button{
        position:absolute;
        height: 10%;
        top: calc(50% - 20px);
        background-color: #48596C;
        border:4px solid #8db7c5;
        color: white;
        font-size:20pt;
        text-align: center;
    }
    button:focus, 
    button:hover{
        background-color: #48596C;
        border-color: #c58db7;
        opacity: 90%;
    }
    .next{
        width: 7%;
        border-right: none;
        text-align: left;
        padding-left: .5%;
        right:0;

    }
    .prev{
        width: 5.8%;
        border-left: none;
        text-align: right;
        padding-right: .5%;
        left:0;
    }
    .grid-container{
        display: grid;
        grid-template-columns: .3fr .5fr .3fr;
        grid-gap: 5%;
        width: 50%;
        height: 140%;
        margin: auto;
        margin-top: 1.2%;
        margin-bottom: 1.2%;
    }
    .slide{

        font-size: 115%;
        color: white;
        text-align: center;
        height: 65%;
        width: 100%;
        transition: .4s; 
    }
    .slide img{
        max-width: 80%;
        max-height: 40vh;
    }
    .link{
        color: white;
        display: block;
        border:4px solid #8db7c5;
    }
    #left{
        margin-top: 30%;
    }
    #right{
        margin-top: 30%;
    }

</style>