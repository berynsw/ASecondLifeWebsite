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
            <p>| About Us! |</p>

        </div>
        <body>
            <section>
                <div class="section-left-text">
                    <h1 class="name">Our Mission</h1>
                    <p class="text">Our Mission is to educate, inspire, and encourage upcycling in order to take steps towards a more sustainable life, and a cleaner planet Earth.</p>
                </div>
                <div class="section-right-img">
                    <!-- <img :src="require(`@/assets/flowers.jpeg`)" class="imgShadow" width= '500' height= '500'> -->
                </div>
            </section>
            <section>
                <div class="section-right-text">
                    <h1 class="name">The Start</h1>
                    <p class="text">A Second Life upcycle website was dreamed up by Keili a student from Western Washington University. With the help of group mates Ashima, Beryn and Katie, A Seconf Life was brought to life, sharing ideas of upcycles and helping to educate the public on the importance of sustainability.</p>
                </div>
                <div class="section-left-img">
                    <!-- <img :src="require(`@/assets/home.jpeg`)" class="imgShadow" width= '500' height= '600'> -->
                </div>
            </section>
             <section>
                <div class="section-left-text">
                    <h1 class="name">The Future</h1>
                    <p class="text">Looking at the future A Second Life would like to continue to help decrease the environmental impact of human waste on the planet and continue in the effort to spread the positive message of how upcycling can help communities and the planet.<br>
                    We also intend to educate people of better recycling and giving them information of local companies and donation center to help someone with their used items.
                    </p>
                </div>
                <div class="section-right-img">
                    <!-- <img :src="require(`@/assets/bag.jpeg`)" class="imgShadow" width= '500' height= '500'> -->
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
      background-image: url("../assets/Garden.jpeg");
     opacity: 0.9;
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
    height: 80px;
    background-color:#8db7c5 ;
    font-size: 40pt;
    text-align: center;
    font-family: Bree Serif;
}

body{
    width: 100%;
    height:2000px;
    background-color: #a3ceae;
    position: relative;
}
/* body .aboutCard{
    
    width: 550px;
    height: 350px;
     background-color: #FAF2EC;
} */

/* body .name{
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
    
    position: absolute;
    top: 15%;
    left: 30%;
}
body .text{
    font-size: 30px;
    color: white;
    width: 500px;
    position: absolute;
    top: 160px;
    left: 100px;
} */
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
	
	width: 40%;
    margin-left: 12%;
	padding: 15px;
	margin-top: -580px;
     
}
.section-right-text {
	float: right;
	width: 40%;
    margin-left: 12%;
    margin-right: 5.5%;
	padding: 30px;
	margin-top: 17px;
    font-size: 30px;
    text-align: justify;
}
.section-right-img {
	float: right;
	width: 40%;
	padding: 30px;
	margin-top: 50px;
    margin-right: 6%;
     
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
    color:rgb(30, 49, 61);
    font-family: Karla;
    margin-top: 1em;
}

</style>