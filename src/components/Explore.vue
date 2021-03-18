<template>
    <div>
        <header>
            <div class="name">A <br> Second <br> Life</div>
        </header>
        <main>
            <div class="subject">Explore Upcycles by Material</div>
        </main>
        <div class="categoryWrapper">
            <br>
            <div class='Pcontainer'>
                <div class="title">Plastic</div>
                <div class="text">Plastic doesn't need to be thrown away. Let's reuse plastic in a new sustainable way!</div>
                <img :src="require(`@/assets/plasticBottle.jpg`)" class="plastic" width= '600' height= '400'>
                <div class="dropdown">
                    <PlasticDD 
                        :data="upcycles.filter(d => d.category == 'Plastic')"
                    />
                </div>
            </div>
            <br>
            <div class='Tcontainer'>
                <div class="title">Tin</div>
                <div class="text">Have an old tin can laying around? Let's turn it into an awesome upcycle!</div>
                <img :src="require(`@/assets/TinCan.jpeg`)" class="tinCan" width= '600' height= '400'>
                <div class="dropdown">
                    <TinDD 
                        :data="upcycles.filter(d => d.category == 'Tin')"
                    />
                </div>
            </div>
            <br>
            <div class='Fcontainer'>
                <div class="title">Food Waste</div>
                <div class="text">Not only can food waste be used in compost, it can also be reused in other ways! Learn more here.</div>
                <img :src="require(`@/assets/foodWaste.jpg`)" class="foodWaste" width= '600' height= '400'>
                <div class="dropdown">
                    <FoodDD 
                        :data="upcycles.filter(d => d.category == 'Food')"
                    />
                </div>
            </div>
            <br>
            <div class='Gcontainer'>
                <div class="title">Glass</div>
                <div class="text">Buy some pasta sauce lately? Lets reuse the jar!</div>
                <img :src="require(`@/assets/Glass.jpg`)" class="glass" width= '600' height= '400'>
                <div class="dropdown">
                    <GlassDD 
                        :data="upcycles.filter(d => d.category == 'Glass')"
                    />
                </div>
            </div>
            <br>
            <div class='Ccontainer'>
                <div class="title">Cardboard</div>
                <div class="text">Don't throw out those boxes after moving! Here's some ideas to make the most of your cardboard</div>
                <img :src="require(`@/assets/cardboard.webp`)" class="cardboard" width= '600' height= '400'>
                <div class="dropdown">
                    <CardboardDD 
                        :data="upcycles.filter(d => d.category == 'Cardboard')"
                    />
                </div>
            </div>
            <br>
            <br>
            <div class='Acontainer'>
                <div class="title">Aluminum</div>
                <div class="text">Drink soda lately? Let's reuse the can!</div>
                <img :src="require(`@/assets/sodaCan.jpg`)" class="soda" width= '400' height= '500'>
                <div class="dropdown">
                    <AluminumDD 
                        :data="upcycles.filter(d => d.category == 'Aluminum')"
                    />
                </div>
            </div>
            <br>
        </div>


    </div>
</template>

<script>
import PlasticDD from './PlasticDD.vue';
import TinDD from './TinDD.vue';
import FoodDD from './FoodDD.vue';
import GlassDD from './GlassDD.vue';
import CardboardDD from './CardboardDD.vue';
import AluminumDD from './AluminumDD.vue';
export default {
    name: 'Explore',
    components: {
        PlasticDD,
        TinDD,
        FoodDD,
        GlassDD,
        CardboardDD,
        AluminumDD
    },
    data(){
        return{
            upcycles: []
        }
    },
    mounted(){
      fetch('https://a-second-life.herokuapp.com/upcycles')
        .then(response => response.json())
        .then(data => {
          this.upcycles = data;
        })
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
test{
    color:black;
    font-size: 30pt;
}
.categoryWrapper {
    background-color: #FAF2EC;
}

header {
    width: 100vw;
    height: 600px;
    padding: 50px 80px;
    background-image: url("../assets/Garden.jpeg");
    background-size: 1440px 960px;
    position: relative;
}
header .name{
    font-size: 100pt;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
}

main .subject{
    font-family: rockwell;
    width: 100%;
    height: 120px;
    background-color:#8db7c5 ;
    font-size: 60px;
    text-align: center;
    line-height: 130px;
    
}
div .Pcontainer{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
    border-style: solid;
    border-color:#48596C;
}
div .Tcontainer{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
    border-style: solid;
    border-color:#48596C;
}
div .Fcontainer{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
    border-style: solid;
    border-color:#48596C;
}
div .Gcontainer{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
    border-style: solid;
    border-color:#48596C;
}
div .Ccontainer{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
    border-style: solid;
    border-color:#48596C;
}
div .Acontainer{
    width: 1000vw;
    height:600px;
    background-color: #8dc59b;
    position: relative;
    border-style: solid;
    border-color:#48596C;
}
    body .title{
        font-size: 60px;
        font-family: rockwell;
        color: white;
        width: 800px;
        position: absolute;
        top: 50px;
        left: 100px;
    }
    body .text{
        font-size: 30px;
        color: white;
        width: 500px;
        position: absolute;
        top: 160px;
        left: 100px;
    }
    body .plastic{
        background-image: url("../assets/plasticBottle.jpg");
        border-style: solid;
        border-color:#48596C;
        position: absolute;
        top: 50px;
        left:600px;
    }
        body .tinCan{
        background-image: url("../assets/TinCan.jpeg");
        border-style: solid;
        border-color:#48596C;
        position: absolute;
        top: 50px;
        left:600px;
    }
        body .foodWaste{
        background-image: url("../assets/foodWaste.jpg");
        border-style: solid;
        border-color:#48596C;
        position: absolute;
        top: 50px;
        left:600px;
    }
        body .glass{
        background-image: url("../assets/Glass.jpg");
        border-style: solid;
        border-color:#48596C;
        position: absolute;
        top: 50px;
        left:600px;
    }
        body .cardboard{
        background-image: url("../assets/cardboard.webp");
        border-style: solid;
        border-color:#48596C;
        position: absolute;
        top: 50px;
        left:600px;
    }
        body .soda{
        background-image: url("../assets/sodaCan.jpg");
        border-style: solid;
        border-color:#48596C;
        position: absolute;
        top: 50px;
        left:600px;
    }
    body .dropdown{
        position: absolute;
        top:300px;
        left: 100px;
        text-decoration: none;
    }
</style>