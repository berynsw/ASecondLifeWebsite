<template>
    <div>
        <!-- <header>
            <h1 class="name">A <br> Second <br> Life</h1>
        </header> -->
        <div class="background">
         
          <div class="banner-content">
            
            A <br> Second <br> Life
            
        </div>
        </div>
        
         <div class="resourcesHeading">
            <p>| Resources |</p>

        </div>
        <body>
            <section>
            <div class="heading">
                <h1> Organizations That Take Used <br> Items For Donation </h1>
                <div></div>
                <p class="p">When you have no use for an item that could potentially be upcycled or reused, 
                    don't throw it away! Consider donating the items to an organization that can reuse the item. 
                    By donating an item you are not only helping to contribute to less waste but also will be benefitting a community in need of donations. </p>
            </div>
            <div class="resourceBox">
                <ul class="ul">
                    <li>Habitat for Humanity</li> 
                    <li>The Salvation Army</li> 
                    <li>Goodwill</li> 
                    <li>The Furniture Bank Network</li> 
                    <li>Pickup Please</li>
                </ul>

            </div>
            </section>
            <section>
            <div class="heading">
                <h1> Companies Involved in <br> Sustainable Recycling Practices </h1>
                <div></div>
                <p class="p">Some companies are incolved in the sustainable practice of returning used
                    containers purchased by customers back to their company. Other companies are involved
                    in sustainable recycling practices making their procudts from recycled material.
                    Here are some companies that are involved in these sustainable practices.
                </p>
            </div>
            <div class="resourceBox">
                <ul class="ul">
                    <li>FD Market</li> 
                    <li>TerraCycle x Garnier</li> 
                    <li>Green Toys</li> 
                    <li>All Birds</li> 
                    <li>Lush</li>
                </ul>

            </div>
            </section>
            
        </body>
    </div>

</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
test{
    color:black;
    font-size: 30pt;
}

.background{
      background-image: url("../assets/nycshopping.jpg");
     opacity: 0.85;
     background-size: cover;
     background-position: center center;
     background-repeat: no-repeat;
     display: flex;
     width: 100%;
     height: 100vh;
     
}
.banner-content {
  position: absolute;
  top: 20%;
  left: 5%;
  font-size: 100pt;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.resourcesHeading{

    width: 100%;
    height: 80px;
    background-color:#8db7c5 ;
    font-size: 40pt;
    text-align: center;
    font-family: Bree Serif;
}

body{
    width: 100%;
    height:1900px;
    background-color:#FAF2EC;
    position: relative;
}

.heading {
    color:rgb(90, 103, 117);
    text-align: center;
    width: 100%;
    padding: 8%;
    font-size: 30px;
    font-family: 'Karla';
}

.p{
    margin-top: 28px;
    
}

.resourceBox{
    width: 60%;
    height: 370px;
    background-color:#a3ceae;
    margin-left: 21%;
    margin-top: -60px;
}

.ul{
    display: block;
    font-size: 2em;
    padding: 46px;
    line-height: 1.8em;
    font-family: 'Karla';
}


</style>