
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
<br>
           <h1 class="sub"> or choose category</h1>
            <select class="select-css" v-model="select" @change="filtercategory"> choose category
            <option>Coastal</option>
            <option>desert</option>
            <option>Archaeological</option>
             </select>
<br>




  <!-- <select  class="dropdown" v-model="select"  @change="filtercategory">category
	<option>Coastal</option>
	<option>desert</option>
	<option>Archaeological</option>
</select>  -->

 


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
.sub{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  font-weight: 50px;
}
.yb{
  width:150px;
  height: 130px;
    border-radius: 200%;
}
.select-css {
	display: block;
	font-size: 20px;
	font-family: sans-serif;
	font-weight: 700;
	color: rgb(3, 3, 3);
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 10%;
	max-width: 20%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: rgb(255, 255, 255);
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
}
.select-css::-ms-expand {
	display: none;
}
.select-css:hover {
	border-color: #888;
}
.select-css:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.select-css option {
	font-weight:normal;
}


     </style>