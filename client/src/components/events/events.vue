<template>
  <v-container fluid>

    <h1> Events you might like  </h1>
    <br> <br>
    <!-- event -->
    <v-row justify="space-around">
      <v-col cols="4" v-for="event in events" :key="event._id">
        <div>
          <div>
            <h3>{{event.title}}</h3>
          </div>
          <v-img :src="event.image" aspect-ratio="1.7"></v-img>
          <br />
              <!-- <v-btn depressed color="primary">Watch Video</v-btn>  -->
          <p>
            {{event.description}}

            <strong>{{event.dateevents}}</strong>
          </p>
      
          <div class="text-center">
            <div class="my-2">
          <video-embed :src="event.youtubeLink"></video-embed>
                
              <div class="text-center">
    <v-bottom-sheet inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Player
        </v-btn>
      </template>
      <v-card tile>
        <v-progress-linear
          :value="50"
          class="my-0"
          height="3"
        ></v-progress-linear>
        </div>
              <br>
              <br>
              <div>
                 
                 <v-btn depressed color="primary" router-link to="/tickets"> Buy Ticket</v-btn>
              </div>
            </div>
          </div>
        
        
        
        </div>
      </v-col>
    </v-row>

    <!-- Plan a Visit to Tunisia -->
    <v-divider></v-divider>

    <h2 data-orig-font="48px" style="font-size: 40px;">Plan a Visit to Tunisia</h2>

    <p>
      Participating in one of the many festivals in Tunisia is a great way to experience Tunisia.
      If you are interested in visiting Tunisia our travel experts
      are happy to assist you to plan a Tunisia tour that could include one or more of these festivals in Tunisia.
    </p>
  </v-container>
</template>


<script>
import axios from 'axios'
import Embed from 'v-video-embed'
import Vue from 'vue'
Vue.use(Embed);
export default {
  name: "Events",

  data: () => {return{
        events: [],
    
  }},
  async mounted() {
    const response = await axios.get("/api/Events/allevents"); 
    console.log(response.data)
    this.events = response.data;
  },
};
</script>


