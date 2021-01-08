<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <Navbar />
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    //
  })
};
</script>