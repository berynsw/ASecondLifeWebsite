<template>
    <div class="carousel">
        <!-- <slot></slot> -->

        <button @click="next" class="next">Next &#9654;</button>
        <div class="slide">
            {{curUpcycle.upcycleName}}
            <img :src="require(`@/assets/${curUpcycle.imageName}`)">
        </div>
        <button @click="prev" class="prev">&#9664; Prev</button>

    </div>
</template>

<script>
export default {
    data(){
        return{
            left: Number,
            middle: Number,
            right: Number,
            curUpcycle: {},
            upcycles: []
            
        }
    },
    methods: {
        next(){
            if(this.i != this.upcycles.length-1){
                this.i++;
                this.curUpcycle = this.upcycles[this.i];
            }
        },
        prev(){
            if(this.i != 0){
                this.i--;
                this.curUpcycle = this.upcycles[this.i];
            }
        }
    },
    mounted(){
      fetch('http://localhost:3000/upcycles')
        .then(response => response.json())
        .then(data => {
          this.upcycles = data;
          this.i = 0;
          this.curUpcycle = this.upcycles[0];
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
    .slide{
        align-self: center;
        font-size: 14pt;
        color: white;
        text-align: center;
        height: 95%;
        width: 15%;
        margin: auto;
        border:4px solid #8db7c5;
        margin-top: .5%;
        transition: .4s;
        
    }
    .slide img{
        max-width: 100%;
        max-height: 100%;
    }
</style>