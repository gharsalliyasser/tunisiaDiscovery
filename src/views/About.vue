<template>
  <v-content>
    <div>
    
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      
    </div>
    <div>
      <v-container>
        <p>Tunisia still has surprises in store for you. You can enjoy the most beautiful sandy beaches, explore the ruins of an ancient Roman city, learn to ride a camel, then completely unwind in one of our superb thalassotherapy centres. Dive through a school of fish, learn to kite surf, taste one of the countless couscous recipes, play a round of golf… For MICE organisers, you can rely on excellent infrastructure and many well equipped conference centres.</p>
      </v-container>
    </div>
    <div>
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
              
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
     
      
    };
  }
};
</script>