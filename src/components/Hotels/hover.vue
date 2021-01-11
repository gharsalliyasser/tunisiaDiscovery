<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
      src="https://media-cdn.tripadvisor.com/media/photo-s/15/e9/16/d6/laico-tunis.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal heading-5 white--text"
            style="height: 100%;"
            font-size="6"
          >
           Strategically located at the heart of the city center, just miles away from the airport as well as many touristic and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, allying Business and Leisure is one of the top luxurious hotel in Tunisia.
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>fighter-jet</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">
          For the perfect meal
        </div>
        <h3 class="display-1 font-weight-light orange--text mb-2">
          QW cooking utensils
        </h3>
        <div class="font-weight-light title mb-2">
          Our Vintage kitchen utensils delight any chef.<br>
          Made of bamboo by hand
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: "hover",
  data: () => ({
  })
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>