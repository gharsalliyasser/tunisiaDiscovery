<template>
    <div class="hotels">
        <v-container class="hotel">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="hotel in hotels" :key="hotel.id">
                    <v-card  class="text-xs-center ma-3">
                        <img class="img"
                            :src=hotel.image_url
                        />
                        <v-card-text>
                            <div class="name">{{hotel.name}}</div>
                            <div class="black--text">{{hotel.description}}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="green">
                            <span>details</span>
                            </v-btn>    
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>    
        </v-container>
    </div>
</template>
<script>
export default {
    name: "x",
    data(){
        return {
            hotels: [
    {
        name: "Four Seasons Hotel Tunis",
        id: 1,
        city: "Tunis",
        image_url: "https://cf.bstatic.com/images/hotel/max1024x768/163/163641203.jpg",
        description:`Located in La Marsa, the Golden Tulip Carthage Tunis hotel is on Gammarth Bay, overlooking the crystal clear waters of the Gulf of Tunis. Free Wi-Fi is provided throughout.
        All rooms and suites are comfortable and most rooms have a view of the sea or the swimming pool. They have a minibar and a balcony.
        The hotel offers different bars and restaurants with local specialties and international menus. Enjoy also the restoring cabaret with its dancers and orchestra.`,
        single_room:"400",
        double_room:"600",
    },
    {
        name: "Laico Tunis",
        id: 2,
        city: "Tunis",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/16/d6/laico-tunis.jpg",
        description:`Strategically located at the heart of the city center, just miles away from the airport as well as many touristic 
        and business attraction, a haven of elegance, an architecture that melts the hearts of all visitors, Laico Hotel – SPA & Conference Center Tunis, 
        allying Business and Leisure is one of the top luxurious hotel in Tunisia.`,
        single_room:"",
        double_room:"",
    },
    {
        name: "The Penthouse Suites Hotel",
        id: 3,
        city: "Tunis",
        image_url: "",
        description:``,
        single_room: 378,
        double_room:"",
    },
    {
        name: "El Mouradi Gammarth",
        id: 4,
        city: "",
        image_url: "",
        description:``,
        single_room:"240",
        double_room:"",
    }]
        }
    }
}
</script>
<style>
.name {
    color : rgb(218, 188, 19);
    font-size: 20px;
}
.img {
    max-width: 100%;
        max-height: 100%;
        display: block;
}
</style>