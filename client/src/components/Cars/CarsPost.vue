<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Cars Post</h2>
      <v-row>
        <v-col v-for="car in cars" :key="car._id" cols="12" md="4">
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
    show: false,
    cars: [
      {
        id: 1,
        title: "Mercedes",
        price: "250 TND",
        text:
          "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
        imageUrl:
          "https://www.eliterent.com/uploads/seo/410x251/c6755fe8de5a6cadacbed3a226b85c8d.jpg",
      },
      {
        id: 2,
        title: "Balano",
        price: "80 TND",
        text:
          "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
        imageUrl:
          "https://www.galanakisrentacar.com/wp-content/uploads/2019/04/suzuki-baleno.jpg.webp",
      },
      {
        id: 3,
        title: "Hynday i10",
        price: "60 TND",
        text:
          "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        imageUrl:
          "https://www.rentacars.ma/uploads/1549537738-economy%20car.jpg",
      },
    ],
  }),
};
</script>