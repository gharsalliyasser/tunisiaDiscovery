<template>
  <div class="block latestPostBlock">
    <v-container v-if="cars">
      <h2 class="text-center">Your Car</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-img class="white--text align-end" height="200px" :src="cars.imageUrl">
              <v-card-title>{{ cars.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ cars.price }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ cars.text }}</div>
            </v-card-text>
            <v-card-actions>
              <router-link>
                <v-btn color="primary" text>Reserve</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";


export default {
    
    name: "CarShow",
     data: () => ({
       cars:null,
}),
    async mounted(){
       const id= this.$route.params.idcars
       console.log(id)
       const show = await axios.get(`/api/Cars/${id}`);
       console.log(show.data)
       this.cars = show.data


    }
       
}
</script>
<style>
</style>