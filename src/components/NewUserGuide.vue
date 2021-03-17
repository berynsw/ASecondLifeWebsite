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
        
         <div class="woodUpcycleHeading">
            <p>| New User Guide |</p>

        </div>
        <body>

            <div class="heading">
                <h1 class="text">Welcome To A Second Life</h1>
                <p class="text">A Second Life strive to help users live a more sustainable life through teaching the <br>
                    practice of upcycling from used items. In addition to upcycles, we also aspire to educate <br>
                    our users on sustainable lifestyle through our resource page which includes information <br>
                    on used item donation centers and brands that use sustainable practice when dealing with waste.
                </p>
                </div>
                <section>
                    <div class="section-left-img">
                    <img :src="require(`@/assets/newuserguide3.jpeg`)" class="imgShadow" width= '600' height= '500'>
                    </div>
                    <div class="section-right-img">
                    <img :src="require(`@/assets/newuserguide2.jpg`)" class="imgShadow" width= '500' height= '500'>
                    </div>
                </section>

            <div class="headingBox">
                    <h1>So What Is An Upcycle ?</h1>
            </div>

            <section>
                <div class="section-left-text">
                    <p class="text">Upcycling is the process of transforming waste, unwanted and used items
                        into a new product or material resulting in reduced amount of waste material that goes to
                        landfill. <br><br>Often times the transformed product has more environmental or artistic value then the 
                        original product did. 
                    </p>
                </div>
                <div class="section-right-img-two">
                    <img :src="require(`@/assets/newuserguide1.jpg`)" class="imgShadow" width= '500' height= '500'>
                </div>
            </section>

             <div class="headingBox-two">
                    <h1>How To Get Started In Three Steps ?</h1>
            </div>
            <div class="heading">
                
                <p class="text">
                    <b>First</b>, go to the explore page and find a material you would like to work with and select it. <br>
                    <b>Second</b>, find an item made from that material you chose from the dropdown list and select it. <br>
                    <b>Third and final</b>, select an upcycle from the list and that will take you to the upcycle instructions. <br>
                    <br><b><i>Now you are ready to create your first upcycle!</i></b>
                </p>
                    
                    
                    
               
                </div>
             
        </body>
    </div>

</template>

<script>
export default {
  name: 'NewUserGuide',
}
</script>

<style scoped>

.background{
      background-image: url("../assets/newuserguidebackground.jpg");
     opacity: 0.7;
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

.woodUpcycleHeading{

    width: 100%;
    height: 120px;
    background-color:#8db7c5 ;
    font-size: 60px;
    text-align: center;
    line-height: 140px;
    font-family: rockwell, bold;
}

body{
    width: 100%;
    height:2700px;
    background-color: #FAF2EC;
    position: relative;
}

.heading {
    color:rgb(90, 103, 117);
    text-align: center;
    width: 100%;
    padding: 5%;
    font-size: 30px;
    font-family: helvetica;
}

.headingBox{
    width: 90%;
    height: 125px;
    background-color:#a3ceae;
    margin-left: 5%;
    margin-top: 560px;
    font-size: 32px;
    text-align: center;
    line-height: 122px;
    font-family: rockwell, bold;
}
.headingBox-two{
    width: 90%;
    height: 125px;
    background-color:#a3ceae;
    margin-left: 5%;
    margin-top: 690px;
    font-size: 30px;
    text-align: center;
    line-height: 122px;
    font-family: rockwell, bold;
}

.section-left-text {
	float: left;
	width: 40%;
    margin-left: 11.5%;
	padding: 30px;
	margin-top: 50px;
    font-size: 30px;
    text-align: justify;
    
}
.section-left-img {
	float: left;
	width: 30%;
    margin-left: 9%;
	
	margin-top: -19px;
    display: flex;
     
}
.section-right-img {
	float: right;
	width: 30%;
	
	margin-top: -19px;
    margin-right:13%;
    display: block;
     
}
.section-right-img-two {
	float: right;
	width: 30%;
	
	margin-top: 3%;
    margin-right:13%;
    display: block;
     
}

.last-section-img-left {
	float: left;
	
	width: 40%;
    margin-left: 12%;
	padding: 15px;
	margin-top: -652px;
     
}

.imgShadow{
     box-shadow:0 20px 40px #292e477d;
}
.text{
      color:rgb(90, 103, 117);
    font-family: helvetica;
    margin-top: 1em;
    
}

</style>