<template>
    <div class="carousel">

        <button @click="next" class="next">Next &#9654;</button>

            <div class="grid-container">

                    <div  id="left" class="slide" >
                        <router-link v-if='leftUpcycle' class="link" :to="`./${leftUpcycle.upcycleName}`">
                            <div>Item: {{leftUpcycle.itemName}}<br>Upcycle: {{leftUpcycle.upcycleName}}</div>
                            <img :src="require(`@/assets/${leftUpcycle.imageName}`)">
                        </router-link>
                    </div>

                    <div id="middle" class="slide">
                        <router-link class="link" :to="`./${midUpcycle.upcycleName}`">
                            <div>Item: {{midUpcycle.itemName}}<br>Upcycle: {{midUpcycle.upcycleName}}</div>
                            <img :src="require(`@/assets/${midUpcycle.imageName}`)">
                        </router-link>
                    </div>

                    <div  id="right" class="slide">
                        <router-link v-if='rightUpcycle' class="link" :to="`./${rightUpcycle.upcycleName}`">
                            <div>Item: {{rightUpcycle.itemName}}<br>Upcycle: {{rightUpcycle.upcycleName}}</div>
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
            leftUpcycle: null,
            midUpcycle: {},
            rightUpcycle: null,
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
        height:27vw;
        overflow:hidden;
        background-color: #a3ceae;
        position: relative;
        display: flex;
        justify-content: center;

    }
    button{
        position:absolute;
        height: 10%;
        top: calc(50% - 20px);
        background-color: #55667F;
        border:4px solid #48596C;
        color: white;
        font-size: 1.5vw;
        text-align: center;
    }

    button:hover{
        background-color: #48596C;
        
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
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3%;
        width: 30%;
        margin-top: vh;
        align-items: center;
        text-align: center;
        margin-left: auto;
        margin-right: 42.3vw;

    }
    .slide{
        font-family: rockwell;
        font-size: 1.1vw;
        color: white;
        text-align: center;
        width: 17.14vw;

        transition: .4s;
        border: .25vw solid #8db7c5; 
        background-color: #55667F;
    }
    .slide img{
        max-width: 12.86vw;
        max-height: 42.86vh;
        border: .25vw solid #48596C;
        margin-top: 1.14vh;
    }
    .link{
        color: white;
        text-decoration: none;
        display: block;
        border: .25vw solid #48596C;
        transition: .4s;
    }
     
    .link:hover{
        background-color: #48596C;
    }

    #left{
        font-size: .77vw;
        width: 12vw;
        border: .175vw solid #8db7c5;  
    }
    #right{
        font-size: .77vw;
        width: 12vw;
        border: .175vw solid #8db7c5; 
    }
    #left img{
        max-width: 9vw;
        max-height: 30vh;
        margin-top: .8vh;
        border: .175vw solid #48596C;  
    }
    #right img{
        max-width: 9vw;
        max-height: 30vh; 
        margin-top: .8vh;
        border: .175vw solid #48596C;
    }
    #left .link{
        border: .175vw solid #48596C;
    }
    #right .link{
        border: .175vw solid #48596C;
    }



</style>