<template>
  <v-container>
    <div id="wrapper"> 
    <div id="left">
      <h1>{{ hotels.title }}</h1>
      <v-rating
                  :value="hotels.stars"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
      <h1 class="description">{{ hotels.description }}</h1>
    </div>
    <div id="right">
      <img height="450" :src="hotels.image_url" />
    </div>
    </div>
    <v-container fluid white>
      <v-row dense>
        <v-col>
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
          <v-text-field v-model="startD" type="date" label="Arrival Date"></v-text-field>
          <v-text-field v-model="endD" type="date" label="Departure Date" @change="BetweenDates"></v-text-field>
          <v-container class="px-0" fluid>
          </v-container>
          <!-- <v-select
            v-model="time"
            :items="items"
            label="Time of taken and delivered"
            dense
          ></v-select>-->
        </v-col>
      </v-row>Total
      <input id="total" type="text" v-model="total" disabled />
      TND
    </v-container>

    <template>
      <div class="text-center ma-2">
        <v-btn color="cyan  darken-2" @click="paymentSend">Reserve</v-btn>
        <v-snackbar v-model="snackbar">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="cyan  darken-2" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
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
    const show = await axios.get(`http://localhost:5000/api/hotels/${id}`);
    this.hotels = show.data;
  },
  methods: {
    verifyCheck1() {
      if (this.checkbox1) {
        this.checkbox2 = false;
      }
    },
    verifyCheck2() {
      if (this.checkbox2) {
        this.checkbox1 = false;
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
      if (this.checkbox1) {
        this.total = dayCount * this.hotels.single_room;
      } else {
        this.total = dayCount * this.hotels.double_room;
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
        total: this.total,
      };
      this.snackbar = true;
      var hotel = await axios.post(
        "http://localhost:5000/api/hotelpayment",
        newPayment
      );
      if (!hotel.data.message) {
        // this.$store.commit("setHotel", hotel.data);
        this.error = "";
        this.$router.push("/payment");
      } else {
          this.error = "Error try later"
        }
    },
  },
};
</script>
<style>
.container {
  position: relative;
}
.description {
  font-size: 25px;
  font:  bold 24px / normal "Garamond", Times, serif;
}
#wrapper {
  display: flex;
  background-color:rgba(0, 0, 0, 0.561)
}

#left {
  flex: 1 1 65%;
  color: white
}

#right {
  flex: 1 1 45%;
  /* top: 100px; */
  }
#total {
  background-color: bisque;
}
</style>
