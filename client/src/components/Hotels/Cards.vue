<template>

    <v-container class="grey lighten-5 mb-6"    
      :key="align"
     
    >
      <v-row>
        <v-col
          v-for="hotel in hotels" :key="hotel.id" 
         class="col" 
        >
        <v-img
      height="250"
      
        :src=hotel.image_url
    ></v-img>
    <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
    <v-card-title
    color="primary"
          dark
          v-bind="attrs"
          v-on="on">{{hotel.name}}</v-card-title>
    </template>
        <span>You can reserve below</span>
    </v-tooltip>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value=hotel.stars
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
        
          
        <span>
          {{hotel.single_room}} TND</span>
         
        <v-chip>double room</v-chip>
        <span>{{hotel.double_room}} TND</span>


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
      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
      <v-btn
         color="primary"
          dark
          v-bind="attrs"
          v-on="on"
      >
        Reserve
      </v-btn>
      </template>
      <span>Reserve</span>
    </v-tooltip>
    </v-card-actions>
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
  export default {
      name: "card",
    data(){
        return {
            hotels: [
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
    ]
        }
    }
    

}
</script>