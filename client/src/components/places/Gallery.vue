
<template>
  <v-container fluid>
<createplace v-if="apear"/>
  <v-btn
      v-if="userstatus === 'admin'"
      class="mx-2"
      dark
      large
      color="cyan"
   @click="apearcarcreate"
    > create car
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
<div>
    <div class="search-wrapper">
      <label class="yasser">𝔖𝔢𝔞𝔯𝔠𝔥 y𝔬𝔲𝔯 𝔡𝔢𝔰𝔱𝔦𝔫𝔞𝔱𝔦𝔬𝔫</label>
      <img  class="yb" src="https://st3.depositphotos.com/27893600/33298/v/1600/depositphotos_332980766-stock-illustration-mark-position-location-pointer-map.jpg" />
      <input class ="yas" type="text" v-model="search" placeholder="Search title.."  @input="filterPlaces"/>     



  <select class="select-css" v-model="select"  @change="filtercategory">category
	<option>Coastal</option>
	<option>desert</option>
	<option>Archaeological</option>
</select>
 </div>
  <div>
    </div>
    <v-row justify="space-around">
      <!-- <div class="subheading" >
          
          <h2 class="name">{{place.name}}</h2>
        </div>  -->







        <!-- <container class="frame">
        <v-img :src ="place.imagelink" ></v-img>            
        </container>
        <br >
         <div class="oo"> 
        {{place.description}}
        </div> 
        <div class="text-center">
          <div class="my-2">


    <v-btn  class="btn"  rounded  
        darktext @click="showplaces(place._id)">
        visit
      </v-btn > 
           </div> 
        </div>   -->
        
     
      <v-col v-for="place in places" :key="place._id" cols="5">
  <v-card
    class="mx-auto"
    max-width="650"
  >
    <v-img :src ="place.imagelink" height="500px" 
    ></v-img>

    <v-card-title>
 <h2 class="name">{{place.name}}</h2>    </v-card-title>



    <v-card-actions>
      <v-btn @click="showplaces(place._id)"
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-btn v-if="userstatus === 'admin'" class="ma-1" color="red" @click="remove(place._id)">Delete</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
           {{place.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


      </v-col>
    </v-row>
    </div>
  </v-container>
</template>

      
<script>
import axios from 'axios';
import createplace from "./createplace";
const Cookie =require('js-cookie');
export default {
  name: "Gallery",
  data() {
    
    return {

      search: '',
      select:'',
      places: [],
            show: false,
      apear : false,
      userstatus:Cookie.get('status'),


    };
  },

  components: {
    createplace,
  },

  async beforeMount(){
    var places = await axios.get('http://localhost:5000/api/place')
    this.places = places.data
  },
  methods:{
    
    switch(){
     this.$router.push({path:'map'})
    },
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
    },
    
    apearcarcreate(){
      this.apear = !this.apear;
    },
    async remove(id){
            await axios.delete(`http://localhost:5000/api/place/${id}`);
            window.location.replace("/Gallery");
        }

  }
  }

 
</script>

<style  scoped>

.yasser{
  font-size: 80px;
}

.pic{
  width: 530px;
  height: 530px;
    border-radius: 10%;


}
.name{
  font-family:s;
  font-size: 60px;

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
.yb{
  width:150px;
  height: 130px;
    border-radius: 200%;
}
     </style>