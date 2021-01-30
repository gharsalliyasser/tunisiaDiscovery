 <template>
  <v-container fluid>
    <div class="search-wrapper">
    <div> <h2 >{{places.name}}</h2> </div>
    <br>
      <br>
        <br>
        <br>
       <v-row class="row-1">
         <v-col cols="6" sm="4" >
         <v-img class="showimg"
         :src= places.extraimage4
         gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          ></v-img>
        </v-col>
         <v-col cols="6" sm="4" >
          <v-img  class="showimg" :src= places.extraimage5>
             <div class="fill-height bottom-gradient"></div>
               </v-img>
             </v-col>
            <v-col
             cols="6"
      sm="4"
    >
      <v-img         :src= places.extraimage6
>
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      
   


        
        <div class="text-center">
          <div class="my-2">

          </div>
       </div>
 </v-col>
  </v-row>

        <br>

        <br>

        <br>

        <div class="oo">
        {{places.info}}
        </div>
        <br>

        <br>

        <br>
<div>         
     <embed class="video" type="video/webm" :src="places.videolink" width="1000" height="600">
</div>
<br>
<br>
<br>
          <v-btn  class="btn"  rounded darktext @click ='Switch' > see map</v-btn>
        <br>

        <br>

        <br>

  <v-row class="row-1">
    <v-col
      cols="6"
      sm="4"
    >
      <v-img class="showimg"
        :src= places.extraimage1
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      ></v-img>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img  class="showimg" :src= places.extraimage2
>
        <div class="fill-height bottom-gradient"></div>
      </v-img>
    </v-col>

    <v-col
      cols="6"
      sm="4"
    >
      <v-img         :src= places.extraimage3
>
        <div class="fill-height repeating-gradient"></div>
      </v-img>
   


        
        <div class="text-center">
          <div class="my-2">

          </div>
       </div>
 </v-col>
  </v-row>
  
     
    </div>
  </v-container>
  

</template>

<script>
import axios from "axios";
export default {
    
    name: "showplaces",
     data: () => ({
       places:null,
}),
    async mounted(){
       const id= this.$route.params.idplace
       console.log(id)
       const show = await axios.get(`http://localhost:5000/api/place/${id}`);
       console.log(show.data)
       this.places = show.data
    },
     methods:{
    Switch(){
     this.$router.push('/map')
    },
     }
       
}
</script>
<style lang="less" scoped>

  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
.oo{
    font-family:cursive;
    font-size: 20px;
}
.showimg{
  width: 1000px;

}
.btn{
  width: 80px;
color: cadetblue;  border-radius: 60%;



}
</style>