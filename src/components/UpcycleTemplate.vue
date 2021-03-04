<template>
    <main>
        <section class="title">
            {{upcycleName}}
        </section>
        <section class="info">
            <img :src="require(`@/assets/${imageName}`)">
            <info>
                <span style="font-weight:bold">Category: </span>{{category}}
                <br/>
                <br/>
                <span style="font-weight:bold">Item: </span>{{itemName}}
                <br/>
                <br/>
                <span style="font-weight:bold">Environmental Impact: </span>{{environmentalImpact}}
                <br/>
                <br/>
                <span style="font-weight:bold">Supplies: </span>{{supplies}}
            </info>
        </section>
        <section class="instructions">
            <br/>
            <br/>
            <span style="font-weight:bold">Instructions: </span>
            <br/>
            <br/>
            {{instructions}}
        </section>


    </main>
</template>

<script>
export default {
  name: 'UpcycleTemplate',
  props: [
    'upcycleName',
    'imageName',
    'category',
    'itemName',
    'environmentalImpact',
    'supplies',
    'instructions'
  ]
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