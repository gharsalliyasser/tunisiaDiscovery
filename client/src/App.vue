<template>
  <v-app>
    <img
      src="https://www.xmple.com/wallpaper/gradient-blue-linear-grey-2880x1800-c2-c0c0c0-1e90ff-a-90-f-14.svg"
      id="bg"
      alt
    />
    <v-app-bar max-height="65">
      <navbar />
    </v-app-bar>
    <div class="app"></div>
    <router-view></router-view>

    <v-footer>
      <Foot />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./layout/Navbar/navbar";
import Foot from "./layout/Footer/foot";

export default {
  data() {
    return {};
  },
  components: {
    Navbar: Navbar,
    Foot: Foot,
  },
};
</script>

<style >
.app {
  display: flex;
  justify-content: center;
}
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

  min-width: 100%;
  min-height: 100%;
}
.navbar {
  font-size: 100px;
}
</style>
