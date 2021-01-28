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

    <div>
      <Foot />
    </div>
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

<style>
#bg {
  position: fixed;
  top: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
}
.navbar {
  font-size: 100px;
}
</style>
