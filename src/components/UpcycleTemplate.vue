<template>
    <main>
        <section class="title">
            {{ $route.params.name }}
        </section>
        <section class="info">
            <img :src="require(`@/assets/${upcycle.imageName}`)">
            <info>
                <span style="font-weight:bold">Category: </span>{{upcycle.category}}
                <br/>
                <br/>
                <span style="font-weight:bold">Item: </span>{{upcycle.itemName}}
                <br/>
                <br/>
                <span style="font-weight:bold">Environmental Impact: </span>{{upcycle.environmentalImpact}}
                <br/>
                <br/>
                <span style="font-weight:bold">Supplies: </span>{{upcycle.supplies}}
            </info>
        </section>
        <section class="instructions">
            <br/>
            <br/>
            <span style="font-weight:bold">Instructions: </span>
            <br/>
            <br/>
            {{upcycle.instructions}}
        </section>


    </main>
</template>

<script>
export default {
    name: 'UpcycleTemplate',
    data () {
        return {
            upcycle: {}
        }
    },
    mounted(){
        fetch('http://localhost:3000/upcycles')
        .then(response => response.json())
        .then(data => {
            data.forEach(d => {
                if(d.upcycleName == this.$route.params.name){
                    this.upcycle = d;
                }
            })
        })
        .catch(err => console.log(err.message))
    }
}
</script>


<style scoped>
main{
    color: #48596C;
    background-color: #FAF2EC;
}

.title{
    font-size: 60pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; 
    padding-top: 40px;
    padding-bottom: 40px;
}
.info{
    display:block;
    font-size: 20pt; 
    font-family: 'Courier New', Courier, monospace;
}
.info img{
    border-style: solid;
    border-color:#48596C;
    height: 500px;
    float: left;
    margin-right: 20px;

}
.instructions{
    display: block;
    height: 300px;
    font-size: 20pt; 
    font-family: 'Courier New', Courier, monospace;
}



</style>