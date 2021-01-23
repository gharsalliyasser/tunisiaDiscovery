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
            <v-card-subtitle class="pb-0">{{ car.price }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ car.text }}</div>
            </v-card-text>
            <v-card-actions>
              <router-link :to="{ name: 'CarShow', params:{idcars: car._id}}">
                <v-btn color="primary" text>More</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CarsPost",

  data: () => ({
     props: {
        cars: Array,
    },
  }),

 mounted() {
    const response = axios.get("api/cars/allcars");
    this.cars = response.data;
  },
};
</script>