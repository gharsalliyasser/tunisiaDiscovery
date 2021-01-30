<template>
  <v-container class="grey lighten-5 mb-6">
    <createHotel v-if="appear" />
    <v-btn
      v-if="userstatus === 'admin'"
      class="mx-2"
      dark
      large
      color="cyan"
      @click="appearHotelCreate"
    >
      Add Hotel
      <v-icon dark>mdi-pencil</v-icon>
    </v-btn>

    <div class="search-wrapper">
      <v-toolbar dark color="cyan">
        <v-toolbar-title>Search</v-toolbar-title>
        <input class="input" type="text" v-model="search" placeholder="Search by city or name.." />

        <v-btn id="homebutton" icon router-link to="/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-toolbar>
    </div>

    <v-row>
      <v-col v-for="(hotel, i) in filterHotels" :key="i" class="col">
        <v-hover v-slot="{ hover }">
          <v-card
            height="100%"
            max-width="450px"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-hover v-slot="{ hover }">
              <v-img height="250" :src="hotel.image_url">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >{{ hotel.title }}</div>
                </v-expand-transition>
              </v-img>
            </v-hover>
            <!-- <v-tooltip bottom> -->
            <template>
              <v-card-title color="primary" dark>{{ hotel.title }}</v-card-title>
            </template>
            <!-- <span>You can reserve below</span> -->
            <!-- </v-tooltip> -->
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

                <!-- <div class="grey--text ml-4">{{ hotel.stars }}</div> -->
              </v-row>
              <div class="my-4 subtitle-1 blue--text">{{ hotel.address }}</div>
              <v-expand-transition>
                <v-card
                  id="card2"
                  v-if="hotel.reveal"
                  transition="scale-transition"
                  origin="center center"
                  height="100%"
                  max-width="450px"
                >
                  <div>{{ hotel.description }}</div>
                  <v-card-actions class="pt-0">
                    <v-btn color="primary" @click="revealDescription(i)">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-expansion-panels popout hover>
              <v-expansion-panel :key="i">
                <v-expansion-panel-header>Description</v-expansion-panel-header>
                <v-expansion-panel-content id="card2">{{hotel.description}}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-expansion-panels popout hover>
              <v-expansion-panel :key="i">
                <v-expansion-panel-header>Price</v-expansion-panel-header>
                <v-expansion-panel-content id="card2">Single Room: {{hotel.single_room}} TND</v-expansion-panel-content>
                <v-expansion-panel-content id="card2">Double Room: {{hotel.double_room}} TND</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <!-- <v-card-text>
              <v-chip-group active-class="deep-purple accent-4 white--text" column>
                <v-chip>single room</v-chip>
                <v-chip>{{ hotel.single_room }} TND</v-chip>
                <span class="my-4 subtitle-4 green--text">All health measures are token*</span>
                <v-chip>double room</v-chip>
                <v-chip>{{ hotel.double_room }} TND</v-chip>
              </v-chip-group>
            </v-card-text>-->
            <span class="ma-16 green--text">All health measures are respected*</span>
            <v-card-actions>
              <!-- <div class="row">
              <div class="col">-->
              <v-btn id="reserve" dark color="cyan" @click="showhotel(hotel._id)">Reserve</v-btn>
              <v-btn
                v-if="userstatus === 'admin'"
                class="ma-1"
                color="red"
                @click="remove(hotel._id)"
              >Delete</v-btn>
              <!-- </div> -->
              <!-- <div class="col">
                  <a :href="hotel.video_url" target="_blank">
                    <v-btn color="primary" dark @click="revealDescription(i)">Description</v-btn>
                  </a>
              </div>-->
              <!-- </div> -->
            </v-card-actions>
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
import createHotel from "./createHotel.vue";
import axios from "axios";
const Cookie = require("js-cookie");
export default {
  name: "card",
  methods: {
    showhotel(id) {
      this.$router.push(`/reservation/${id}`);
    },
    appearHotelCreate() {
      this.apear = !this.apear;
    },
    async remove(id) {
      await axios.delete(`http://localhost:5000/api/hotels/${id}`);
      window.location.replace("/hotels");
    },
    revealDescription(i) {
      this.hotels[i].reveal = !this.hotels[i].reveal;
    },
  },
  computed: {
    filterHotels() {
      return this.hotels.filter(
        (e) =>
          e.title.toLowerCase().includes(this.search.toLowerCase()) ||
          e.address.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  async beforeMount() {
    var hotels = await axios.get("http://localhost:5000/api/hotels");
    this.hotels = hotels.data.hotels;
    console.log("hotels", this.hotels);
  },
  data() {
    return {
      search: "",
      hotels: [],
      select: { room: "Single Room", price: 200 },
      items: [
        { room: "Single Room", price: 200 },
        { room: "Double Room", price: 300 },
      ],
      appear: false,
      userstatus: Cookie.get("status"),
      reveal: false,
      panel: [0, 1],
      disabled: false,
      readonly: false,
    };
  },
  components: {
    createHotel,
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
.search {
  font-size: 12px;
}
.input {
  box-sizing: content-box;
  width: 85%;
  margin: 10px;
  padding: 20px;
  /* border: rgb(159, 45, 45); */
  font: bold 19px / normal "Garamond", Times, serif;
  color: white;
  text-align: justify;
  letter-spacing: 1px;
  -webkit-transform: rotateY(0.5729577951308232deg);
  transform: rotateY(0.5729577951308232deg);
}
#card2 {
  background-color: rgba(22, 184, 199, 0.7);
  color: white;
}
#reserve {
  width: 100%;
}
</style>
