<template>
<div class="block latestPostBlock">

  
    <v-container>
      <h2 class="text-center">Cars Post</h2>
      <v-row>
        <v-col v-for="(car) in cars" :key="car._id" cols="12" md="4" >
          <v-card outlined class="mx-auto">
            <v-img class="white--text align-end" height="200px" :src="car.imageUrl">
              <v-card-title>{{ car.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ car.price }} <span> per day </span></v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ car.text }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="showcar(car._id)">More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CarsPost",

  data: () => ({
     
        cars: [],
  
  }),

 async mounted() {
    const response = await axios.get("http://localhost:5000/api/Car");
    console.log(response.data)
    this.cars = response.data;
  },
  methods: {
    showcar(id){
      this.$router.push(`/CarShow/${id}`)

    }
  }
};
</script>