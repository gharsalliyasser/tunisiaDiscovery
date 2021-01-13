<template>
  <v-content>
    <div>
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="headline">Home</div>
          </v-container>
        </v-col>
      </v-row>
    </div>

    <div class="app">
      <carousel>
        <carouselslide
          v-for="slide in slides"
          :key="slide"
          class="carousel-slider"
        >
          <img :src="slide" :alt="slide" />
        </carouselslide>
      </carousel>
    </div>
    
    <div>
      <v-container>
        <p>
          Tunisia is close to the main European capitals and has plenty of
          connecting flights to these every week. As well as the convenience of
          the flight and the savings in transport costs, Tunisia is a fantastic
          destination for shorter events in an exotic location. There’s the
          Sahara (which has been used as the location for many films, including
          the classic Star Wars saga) as well as prestigious sites like the El
          Dem amphitheatre. Tunisia is the perfect destination for product
          launches and commemorations, combining originality and solutions to
          suit all budgets.
        </p>
        <v-row>
          <v-card>
            <div class="title"></div>
          </v-card>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
import carousel from '../slideshow/carousel';
import carouselslide from '../slideshow/carouselslide';
export default {
  name: "home",
  data() {
    return {
      slides: [
        "https://c4.wallpaperflare.com/wallpaper/100/297/74/desert-sand-tourism-camels-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/403/906/437/nature-landscape-mountains-clouds-sunset-hd-wallpaper-preview.jpg",
        "https://c0.wallpaperflare.com/preview/995/39/628/building-architecture-dome-tunisia.jpg",
        "https://c4.wallpaperflare.com/wallpaper/68/616/996/5bd128613e2d8-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/359/745/168/independence-day-in-tunisia-republic-of-tunisia-monastir-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/868/182/441/desert-sand-dune-sky-sahara-wallpaper-preview.jpg",
        "https://c0.wallpaperflare.com/preview/149/745/100/tunis-tunisia-sidi-bou-said-sea.jpg",
        "https://c4.wallpaperflare.com/wallpaper/1007/911/617/mediterranean-mediterranean-sea-sea-tunisia-wallpaper-preview.jpg",
      ],
    };
  },
  components: {
     carousel,
   carouselslide,
  },
};
</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
  width: 900px;
  height: 500px;
  z-index: 10;
}
.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #fff;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
  width: 70px;
}
.btn-prev {
  top: 50%;
  left: 0;
  width: 70px;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>