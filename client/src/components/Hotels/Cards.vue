<template>
  <v-container class="grey lighten-5 mb-6">
    <Datepicker />

    <v-row>
      <v-col v-for="hotel in hotels" :key="hotel._id" class="col">
        <v-hover v-slot="{ hover }">
          <v-card height="100%" :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
            <v-hover v-slot="{ hover }">
              <v-img height="250" :src="hotel.image_url">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >{{hotel.title}}
                   {{console.log('hotelhotelhotelhotel',hotel)}}
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-card-title color="primary" dark v-bind="attrs" v-on="on">{{hotel.title}}</v-card-title>
              </template>
              <span>You can reserve below</span>
            </v-tooltip>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="hotel.stars"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">{{hotel.stars}}</div>
              </v-row>

              <div class="my-4 subtitle-1 blue--text">{{hotel.address}}</div>

              <div>{{hotel.description}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>single room</v-chip>
                <v-chip>{{hotel.single_room}} TND</v-chip>
                <span class="my-4 subtitle-4 green--text">All health measures are token*</span>
                <v-chip>double room</v-chip>
                <v-chip>{{hotel.double_room}} TND</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <!-- <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
              </v-btn>-->
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">Reserve</v-btn>
                </template>
                <span>Reserve</span>
              </v-tooltip>
              <div>
                <a :href="hotel.video_url" target="_blank">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">watch video</v-btn>
                </a>
              </div>
            </v-card-actions>
            <v-container fluid>
              <v-row align="center">
                <v-col cols="6">
                  <v-subheader>Choose type of room</v-subheader>
                </v-col>

                <v-col cols="6">
                  <v-select
                    v-model="select"
                    :hint="`${select.room}, ${select.price}TND`"
                    :items="items"
                    item-text="room"
                    item-value="price"
                    label="Select"
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<style>
.col {
  width: 25% !important;
}
</style>
<script>
import Datepicker from "./main.vue";
// import Picker from "./Calendar"
// import Filter from "./filter"
import axios from 'axios'
export default {
  name: "card",
  methods: {

  },
  async beforeMount(){
    var hotels = await axios.get('http://localhost:5000/api/hotels')
    this.hotels=hotels.data.hotels
    console.log('hotels',this.hotels)
  },
  data() {
    return {
      selection:"",
      hotels:null,
      select: { room: "Single Room", price: 200 },
      items: [
        { room: "Single Room", price: 200 },
        { room: "Double Room", price: 300 },
      ],
    };
  },
  components: {
    Datepicker: Datepicker,
    // Picker: Picker,
    // Filter: Filter
  },
};

</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 1;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  width: 100%;
}
</style>
 