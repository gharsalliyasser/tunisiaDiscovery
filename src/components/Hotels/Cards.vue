<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://media-cdn.tripadvisor.com/media/photo-s/15/e9/16/d6/laico-tunis.jpg"
    ></v-img>

    <v-card-title>Laico Tunis</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Laico Tunis Spa & Conference Center
      </div>

      <div>Strategically located at the heart of the city center, just miles away from the airport as well as many touristic and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, allying Business and Leisure is one of the top luxurious hotel in Tunisia.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>single room</v-chip>

        <v-chip>double room</v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
      name: "card",
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    

}
</script>