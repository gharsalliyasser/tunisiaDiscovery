<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
      <img class="c-img" height="100%" width="60%" :src="srcs[i]" >
          <div class="display-3">
            {{ slide }} 
          </div>
          
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
      name: "c",
    data () {
      return {
        slides: [
          'Douz',
          'Carthage',
          'Kairouan',
          'Chott Jerid',
          'Sidi Bou Said',
          'Monastir',
        ],
        srcs: [
        "https://c4.wallpaperflare.com/wallpaper/100/297/74/desert-sand-tourism-camels-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/403/906/437/nature-landscape-mountains-clouds-sunset-hd-wallpaper-preview.jpg",
        "https://c0.wallpaperflare.com/preview/995/39/628/building-architecture-dome-tunisia.jpg",
        "https://c4.wallpaperflare.com/wallpaper/68/616/996/5bd128613e2d8-wallpaper-preview.jpg",
        "https://c0.wallpaperflare.com/preview/149/745/100/tunis-tunisia-sidi-bou-said-sea.jpg",
        "https://c4.wallpaperflare.com/wallpaper/359/745/168/independence-day-in-tunisia-republic-of-tunisia-monastir-wallpaper-preview.jpg",
        ],
      }
    },
  }
</script>
<style>
.display-3 {
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>