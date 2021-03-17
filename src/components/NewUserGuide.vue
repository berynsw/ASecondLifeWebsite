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
                    <img :src="require(`@/assets/newuserguide3.jpeg`)" class="imgShadow" width= '700vw' height= '500vh'>
                    </div>
                    <div class="section-right-img">
                    <img :src="require(`@/assets/newuserguide2.jpg`)" class="imgShadow" width= '500vw' height= '500vh'>
                    </div>
                </section>

            <div class="headingBox">
                    <h1>So, what is an upcycle?</h1>
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
                    <img :src="require(`@/assets/newuserguide1.jpg`)" class="imgShadow" width= '500vw' height= '500vh'>
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
  font-size: 7vw;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.woodUpcycleHeading{

    width: 100%;
    height: 11vh;
    background-color:#8db7c5 ;
    font-size: 3.3vw;
    text-align: center;
    line-height: 11vh;
    font-family: rockwell, bold;
}

body{
    width: 100%;
    height: 230vh;
    background-color: #FAF2EC;
    position: relative;
}

.heading {
    color:rgb(90, 103, 117);
    text-align: center;
    width: 100%;
    padding: 5%;
<<<<<<< HEAD
    font-size: 1.6vw;
=======
    font-size: 1.7em;
>>>>>>> 339d73d605aafd2a06df73699193b0b8503f5277
    font-family: helvetica;
}

.headingBox{
    width: 90%;
    height: 11.8vh;
    background-color:#a3ceae;
    margin-left: 5%;
<<<<<<< HEAD
    margin-top: 52vh;
    font-size: 1.5vw;
=======
    margin-top: 560px;
    font-size: 1.5em;
>>>>>>> 339d73d605aafd2a06df73699193b0b8503f5277
    text-align: center;
    line-height: 11.8vh;
    font-family: rockwell, bold;
}
.headingBox-two{
    width: 90%;
    height: 11.8vh;
    background-color:#a3ceae;
    margin-left: 5%;
<<<<<<< HEAD
    margin-top: 61vh;
    font-size: 1.5vw;
=======
    margin-top: 690px;
    font-size: 1.5em;
>>>>>>> 339d73d605aafd2a06df73699193b0b8503f5277
    text-align: center;
    line-height: 11.8vh;
    font-family: rockwell, bold;
}

.section-left-text {
	float: left;
	width: 40%;
    margin-left: 11.5%;
	padding: 3vh;
	margin-top: 3.7vh;
    font-size: 1.5vw;
    text-align: justify;
    
}
.section-left-img {
	float: left;
	width: 30%;
    margin-left: 7%;
	margin-right: 13%;
	margin-top: -19px;
    display: flex;
     
}
.section-right-img {
	float: right;
	width: 30%;
	
	margin-top: -1.6vh;
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


     
}

.imgShadow{
     box-shadow:0 2vh 2vw #292e477d;
}
.text{
      color:rgb(90, 103, 117);
    font-family: helvetica;
    margin-top: 1em;
    
}

</style>