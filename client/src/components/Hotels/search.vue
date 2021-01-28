<template>
  <v-toolbar dark color="teal">
    <v-toolbar-title>Search</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search by city or name.."
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
// import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      hotels:['la Badira'],
    };
  },
  // computed: {
  //   filterHotels() {
  //     return this.hotels.filter(
  //       (e) =>
  //         e.title.toLowerCase().includes(this.search.toLowerCase()) ||
  //         e.address.toLowerCase().includes(this.search.toLowerCase())
  //     );
  //   },
  // },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.hotels.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
  // async beforeMount() {
  //   var hotels = await axios.get("http://localhost:5000/api/hotels");
  //   this.hotels = hotels.data.hotels;
  //   console.log("hotels", this.hotels);
  // },
};
</script>
