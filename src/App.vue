<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <Navbar />
    </v-app-bar>
   <!-- <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>     -->
    <router-view></router-view>
    
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>




<script>

//  import Carousel from './components/Slideshow/Carousel';
//  import CarouselSlide from './components/Slideshow/CarouselSlide';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default {
    data(){
        return {
            // slides: [
            //   'https://c4.wallpaperflare.com/wallpaper/100/297/74/desert-sand-tourism-camels-wallpaper-preview.jpg',
            //     'https://c4.wallpaperflare.com/wallpaper/403/906/437/nature-landscape-mountains-clouds-sunset-hd-wallpaper-preview.jpg',
            //     'https://c0.wallpaperflare.com/preview/995/39/628/building-architecture-dome-tunisia.jpg',
            //     'https://c4.wallpaperflare.com/wallpaper/68/616/996/5bd128613e2d8-wallpaper-preview.jpg',
            //     'https://c4.wallpaperflare.com/wallpaper/359/745/168/independence-day-in-tunisia-republic-of-tunisia-monastir-wallpaper-preview.jpg',
            //     'https://c4.wallpaperflare.com/wallpaper/868/182/441/desert-sand-dune-sky-sahara-wallpaper-preview.jpg',
            //     'https://c0.wallpaperflare.com/preview/149/745/100/tunis-tunisia-sidi-bou-said-sea.jpg',
            //     'https://c4.wallpaperflare.com/wallpaper/1007/911/617/mediterranean-mediterranean-sea-sea-tunisia-wallpaper-preview.jpg',
            // ]
        }
    },
    components : {
        // Carousel : Carousel,
        // CarouselSlide : CarouselSlide,
      
    Navbar,
    Footer,

    },
}
</script>



<style>
    .app {
        display:flex;
        justify-content: center;
    }
   
</style>
