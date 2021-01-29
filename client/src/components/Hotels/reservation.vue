<template>
  <v-container>
    <div>
      <h1 class="title">{{ hotels.title }}</h1>
      <img height="450" :src="hotels.image_url" />
    </div>
    <v-container fluid white>
      <v-row dense>
        <v-col>
          <v-text-field v-model="startD" type="date" label="Arrival Date">
          </v-text-field>
          <v-text-field
            v-model="endD"
            type="date"
            label="Departure Date"
            @change="BetweenDates"
          >
          </v-text-field>
          <v-container
    class="px-0"
    fluid
  >
    <v-checkbox
      v-model="checkbox1"
      id="checkbox1"
      @click="verifyCheck1"
      :label="`Single Room: ${hotels.single_room}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      id="checkbox2"
       @click="verifyCheck2"
      :label="`Double Room: ${hotels.double_room}`"
    ></v-checkbox>
  </v-container>
          <!-- <v-select
            v-model="time"
            :items="items"
            label="Time of taken and delivered"
            dense
          ></v-select> -->
        </v-col>
      </v-row>
    Total: <input type="text" v-model="total" disabled /> DT
    </v-container>
   
    <template>
      <div class="text-center ma-2">
        <v-btn color="cyan  darken-2" @click="paymentSend" >
          Reserve
        </v-btn>
        <v-snackbar v-model="snackbar">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="cyan  darken-2" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </template>
  </v-container>
</template>
<script>
import axios from "axios";
const Cookie = require("js-cookie");
export default {
  name: "reservation",
  data: () => {
    return {
      hotels: null,
      username: Cookie.get("name"),
      useremail: Cookie.get("email"),
      userphone: Cookie.get("number"),
      startD: "",
      endD: "",
      total: "",
      snackbar: false,
      text: `Added to cart`,
      checkbox1: false,
      checkbox2: false,
      
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    console.log(id);
    const show = await axios.get(`http://localhost:5000/api/hotels/${id}`);
    console.log(show.data);
    this.hotels = show.data;
  },
  methods: {
    verifyCheck1() {
if (this.checkbox1){
  this.checkbox2 = false
}},
verifyCheck2() {
if (this.checkbox2){
  this.checkbox1 = false
}
    },
    BetweenDates() {
      const startDate = new Date(this.startD);
      const endDate = new Date(this.endD);
      let dayCount = 0;
      console.log(startDate, endDate);
      while (endDate > startDate) {
        dayCount++;
        startDate.setDate(startDate.getDate() + 1);
      } 
      if (this.checkbox1) 
      {
        this.total = dayCount * this.hotels.single_room;
        this.checkbox1 = false;
      this.checkbox2 = false;
      } else {
        this.total = dayCount * this.hotels.double_room;
      this.checkbox1 = false;
      this.checkbox2 = false;

      }
      console.log(this.total);
      return dayCount;

    },
    async paymentSend() {
      console.log("Cookie.get()username", Cookie.get("name"));
      console.log("Cookie.get()useremail", Cookie.get("email"));
      console.log("Cookie.get()userphone", Cookie.get("number"));
      let newPayment = {
        username: this.username,
        useremail: this.useremail,
        userphone: this.userphone,
        startD: this.startD,
        endD: this.endD,
        time: this.time,
        total: this.total,
      };
      this.snackbar = true;
      var hotel = await axios.post(
        "http://localhost:5000/api/hotelpayment",
        newPayment
      );
      if (!hotel.data.message) {
        this.$store.commit("setHotel", hotel.data);
        this.error = "";
        this.$router.push("/payment");
      }
    },
  },
};
</script>
<style>
.container {
  position: relative;
}
</style>
