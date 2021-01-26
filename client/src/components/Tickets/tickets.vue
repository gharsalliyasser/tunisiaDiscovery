<template>
<v-app>
<v-container>
<h1> Tickets </h1>
<br> <br>
<v-row justify="space-around">
      <v-col cols="4" v-for="event in events" :key="event._id">

    
    <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="600">
   
   <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
             <h5> {{event.price}} </h5>
          </div>
        </v-expand-transition>
          <v-img :src="event.image" aspect-ratio="1.7"></v-img>
          <div>
            <h3>{{event.title}}</h3>
          </div>
          <br>
          
             
         <v-btn absolute color="green darken-2" class="white--text" router-link to="/cart" >Add to Cart

           <v-icon>mdi-cart</v-icon>  
        </v-btn>
        <br> <br>
        <div class="right">
        
       </div>
            
            </v-card>
     </v-hover>
      </v-col>
    </v-row>

    </v-container>
    </v-app>
</template>

<script>

export default {
  name: "",
  props: {},
  
  data() {
    return {

      events: [
       {
          id: 1,
          title: "International Festival of Sousse",
          image:
            "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/117099366_1036949290110505_2677540095970272956_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=Kxzs30d-KdkAX9nJx3b&_nc_oc=AQmrLVw1Y3IVTvQAT3Y0ne-wJVRR61ihuYtbmalIWyEcR0yfzl00I3TjZMsQ9QomDCU&_nc_ht=scontent.ftun2-1.fna&oh=12c1f36490749c483aa8a838bd6c77d5&oe=60235378",
          price:' 70Dt' ,
           
         
        },
        {
          id: 2,
          title: "Sahara Festival in Douz ",
          image:
           "https://blogeuropcar.files.wordpress.com/2015/12/festival-international-du-sahara-de-douz-du-24-au-27-dc3a9cembre.jpg?w=800",
        price: '50Dt',
        },
        {
          id: 3,
          title: "International Festival of Dougga",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/84/Th%C3%A9%C3%A2tre_romain_dougga.jpg",
        price: '50Dt',
        },
        {
          id: 4,
          title: "International Festival of Bizerte",
          image:
           "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/117621023_3225873457498610_5268762180538019135_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=rXByUplR8usAX9WNx2P&_nc_ht=scontent.ftun2-1.fna&oh=4f775b21b6d8cbb0530c0a12a548b787&oe=602325AB",
         
          youtubeLink:
            "https://www.youtube.com/watch?v=Qrxjz0UFoTM&ab_channel=CazzaProduction",
        price: '40Dt',
        },
        {
          id: 5,
          title: "Djerba Electronic Music Festival",
          image:
           "https://media.shemsfm.net/uploads/FCK_files/16388150_1296906547015438_5462984296846066528_n.jpg", 
         price: '80Dt',
        },
        {
          id: 6,
          title: "International Festival of Jem",
          image:
           "https://upload.wikimedia.org/wikipedia/commons/e/ee/Amphith%C3%A9%C3%A2tre_d%27El_Jem.jpg",
         price: '50Dt',
        },
        {
          id: 7,
          title: "International Festival of Carthage",
          image:
           "https://content.mosaiquefm.net/uploads/content/thumbnails/report_du_spectacle_ziara_1558729131.jpg",
         price: '70Dt',
        },
        {
          id: 8,
          title: "Tabarka Jazz Festival",
          image:
            "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/117099366_1036949290110505_2677540095970272956_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=Kxzs30d-KdkAX9nJx3b&_nc_oc=AQmrLVw1Y3IVTvQAT3Y0ne-wJVRR61ihuYtbmalIWyEcR0yfzl00I3TjZMsQ9QomDCU&_nc_ht=scontent.ftun2-1.fna&oh=12c1f36490749c483aa8a838bd6c77d5&oe=60235378",
         price: '50Dt',
        },
        {
          id: 9,
          title: "International Festival of Hammamet",
          image:
          "https://www.musicien.tn/wp-content/uploads/2019/07/67214600_1291046961051626_5957503562383622144_o-780x405.jpg",
         price: '70Dt',
        },
      ],
    };
  },
  methods: {
    likebtn() {
      this.likebtn +=1;
      alert ("it works");
    },
    dislikebtn() {
      this.dislikebtn +=1;
    }
  }
};
</script>

<style scoped>
 input { 
   width :50px;
   border:none;
   background: none;
   color: black;
   font-size: 30px;
   margin:0 10px;
 }
 
</style>