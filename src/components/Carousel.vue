<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        next(){
            this.$emit('next')
        },
        prev(){
            this.$emit('prev')
        }
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
    }
    button{
        position:absolute;
        height:40px;
        width:100px;
        top: calc(50% - 20px);
        background-color: #48596C;
        border:none;
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
        right:0;
    }
    .prev{
        left:0;
    }
</style>