<template>
  <v-container fluid>
    <div class="search-wrapper">
      <label class="yasser">𝔖𝔢𝔞𝔯𝔠𝔥 y𝔬𝔲𝔯 𝔡𝔢𝔰𝔱𝔦𝔫𝔞𝔱𝔦𝔬𝔫</label>
      <input class ="yas" type="text" v-model="search" placeholder="Search title.."  @input="filterPlaces"/>


       <select class="drop" v-model="select"  @change="filtercategory">
    <option value="Coastal">Coastal</option>
    <option value="desert">desert</option>
    <option value="Archaeological">Archaeological</option>
  category</select>

<!-- 



<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <a href="https://www.leaders.com.tn/uploads/content/thumbnails/156292126689_content.jpg"
           class="carousel__prev">Go to last slide</a>
        <a href="https://www.leaders.com.tn/uploads/content/thumbnails/20140912172552__jer.jpg"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="https://carthagemagazine.com/wp-content/uploads/2020/09/Sidi-Bou-Said-La-Gulett-Tunisia-White-and-blue-town.jpg"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section> -->













    </div>
    <div>
    </div>
    <v-row justify="space-around">
      <v-col v-for="place in places" :key="place._id" cols="5">
        <div class="subheading" >
          <h2 >{{place.name}}</h2>
        </div>
        <container class="frame">
        <v-img  class="img" :src="place.imagelink" ></v-img>            
        </container>
        <br >
        <div class="oo">
        {{place.description}}
        </div>
        <div class="text-center">
          <div class="my-2">
    

<div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-btn   rounded
        color="primary"
        darktext @click="showplaces(place._id)"

      
      >
        visit
      </v-btn >
    </div>
  </v-app>
</div>











                


          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
      
<script>
import axios from 'axios'
export default {
  name: "Gallery",
  data() {
    return {
      search: '',
      select:'',
      places: [],

    };
  },
 
  async beforeMount(){
    var places = await axios.get('http://localhost:5000/api/place')
    this.places = places.data
  },
  methods:{
    async filterPlaces(){
      var places = await axios.post('http://localhost:5000/api/place/findPlace',{name:this.search})
      this.places = places.data
    },
         async filtercategory(){
           console.log(this.select)
      var places = await axios.post('http://localhost:5000/api/place/findPlace',{category:this.select})
      console.log(places.data)
      this.places = places.data

    },
       showplaces(id){
      this.$router.push(`/showplaces/${id}`)
    }
    

  }
  }

 
</script>
<style  scoped>
.yasser{
  font-size: 80px;
}



.yas{
      
  display: DancingScript;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  margin: 30px;
  padding: 20px;
  border:rgb(159, 45, 45);
  -webkit-border-radius: 55px / 65px;
  border-radius: 55px / 65px;
  font: italic normal bold 16px/normal Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  text-align: justify;
  -o-text-overflow: clip;
  text-overflow: clip;
  letter-spacing: 2px;
  background-position: 31% 88%;
  -webkit-background-origin: padding-box;
  background-origin: padding-box;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
  box-shadow: 2px 2px 2px 0 rgba(120, 30, 30, 0.2) inset;
  text-shadow: 1px 1px 0 rgba(83, 24, 24, 0.66) ;
  -webkit-transition: letter-spacing 200ms cubic-bezier(0.795, 0.05, 0.175, 1);
  -moz-transition: letter-spacing 200ms cubic-bezier(0.795, 0.05, 0.175, 1);
  -o-transition: letter-spacing 200ms cubic-bezier(0.795, 0.05, 0.175, 1);
  transition: letter-spacing 200ms cubic-bezier(0.795, 0.05, 0.175, 1);
  -webkit-transform: rotateY(0.5729577951308232deg)   ;
  transform: rotateY(0.5729577951308232deg)   ;
}
/* .drop{
  ransition:All 1s ease;
-webkit-transition:All 1s ease;
-moz-transition:All 1s ease;
-o-transition:All 1s ease;
transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
-webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
-moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
-o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
-ms-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);
text-shadow:33px 14px 0px #000000;
-moz-box-shadow: 75px -43px 14px #000000;
-webkit-box-shadow: 75px -43px 14px #000000;
box-shadow: 75px -43px 14px #000000;
} */

/* .drop{
  size: 1000px;
border:dashed 0px #000000;
-moz-border-radius-topleft: 100px;
-moz-border-radius-topright:0px;
-moz-border-radius-bottomleft:0px;
-moz-border-radius-bottomright:75px;
-webkit-border-top-left-radius:75px;
-webkit-border-top-right-radius:0px;
-webkit-border-bottom-left-radius:0px;
-webkit-border-bottom-right-radius:75px;
border-top-left-radius:75px;
border-top-right-radius:0px;
border-bottom-left-radius:0px;
border-bottom-right-radius:75px;
background:-webkit-gradient(linear, 80% 20%, 10% 21%, from(#12CFFF), to(#FF4E28));

 } */



















  /* .frame{
    
  background-color:#ddc;
  border:solid 5vmin #eee;
  border-bottom-color:#fff;
  border-left-color:#eee;
  border-radius:2px;
  border-right-color:#eee;
  border-top-color:#ddd;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  display:inline-block;
  height:70vh;
  position:relative;
  text-align:center;
  }

  .img{
    
  border:solid 2px;
  border-bottom-color:#ffe;
  border-left-color:#eed;
  border-right-color:#eed;
  border-top-color:#ccb;
  max-height:100%;
  max-width:60%;


  }

.html {
  background-image:linear-gradient(#eee, #aaa);
  height:100%;
} */
 </style>