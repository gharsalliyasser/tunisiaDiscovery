<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
                <v-divider></v-divider>
                <span>{{ item.stars}}</span>
                <v-divider></v-divider>
                <span>{{item.single_room}} TND</span>
              </v-card-title>
              

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in items"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
  export default {
      name: "filter",
    data () {
      return {
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        keys: [
          'Name',
          'City',
          'Stars',
        ],
        items: [
          {
        name: "Four Seasons Hotel Tunis",
        id: 1,
        city: "Tunis",
        stars: 5,
        image_url: "https://cf.bstatic.com/images/hotel/max1024x768/163/163641203.jpg",
        description:`Located in La Marsa, the Golden Tulip Carthage Tunis hotel is on Gammarth Bay, overlooking the crystal clear waters of the Gulf of Tunis. Free Wi-Fi is provided throughout.
        All rooms and suites are comfortable and most rooms have a view of the sea or the swimming pool. They have a minibar and a balcony.
        The hotel offers different bars and restaurants with local specialties and international menus. Enjoy also the restoring cabaret with its dancers and orchestra.`,
        single_room:520,
        double_room:740,
    },
    {
        name: "Laico Tunis",
        id: 2,
        city: "Tunis",
        stars: 5,
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/16/d6/laico-tunis.jpg",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room:410,
        double_room:608,
    },
    {
        name: "The Penthouse Suites Hotel",
        id: 3,
        city: "Tunis",
        stars: 5,
        image_url: "https://image.resabooking.com/images/image_panoramique/Penthouse_Suites_Hotel_2.jpg",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room: 378,
        double_room:430,
    },
    {
        name: "El Mouradi Gammarth",
        id: 4,
        city: "Tunis",
        stars: 5,
        image_url: "https://image.resabooking.com/images/hotel/El_Mouradi_Gammarth_.jpg",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room:240,
        double_room:310,
    },
    {
        name: "Ramada Plaza Tunis",
        id: 5,
        city: "Tunis",
        stars: 5,
        image_url: "https://image.resabooking.com/images/image_panoramique/Ramada_Plaza_Tunis_2.png",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room:370,
        double_room:530,
    },
    {
        name: "Novotel Tunis Mohamed V",
        id: 6,
        city: "Tunis",
        stars: 4,
        image_url: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/21/45/2145176_v6.jpeg",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room:350,
        double_room:460,
    },
    {
        name: "Carthage Thalasso Resort",
        id: 7,
        city: "Tunis",
        stars: 5,
        image_url: "https://image.resabooking.com/images/image_panoramique/Carthage_Thalasso_2.png",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room:300,
        double_room:400,
    },
    {
        name: "Golden Tulip Carthage",
        id: 8,
        city: "Tunis",
        stars: 5,
        image_url: "https://image.resabooking.com/images/image_panoramique/Golden_Tulip_Carthage_2.png",
        description:`Located in La Marsa, the Golden Tulip Carthage Tunis hotel is on Gammarth Bay, overlooking the crystal clear waters of the Gulf of Tunis. Free Wi-Fi is provided throughout.
        All rooms and suites are comfortable and most rooms have a view of the sea or the swimming pool. They have a minibar and a balcony.
        The hotel offers different bars and restaurants with local specialties and international menus. Enjoy also the restoring cabaret with its dancers and orchestra.
        For your relaxation, the hotel suggests Antonin centre, with the traditional hammam, indoor swimming pool and sauna.`,
        single_room:570,
        double_room:800,
    },
        ],
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>