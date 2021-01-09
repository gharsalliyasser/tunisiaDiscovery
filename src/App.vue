<template>
    
  <div id="app">
<v-app>
    <v-app-bar height="65">
      <Navbar />
    </v-app-bar>

    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
    
    <!-- <router-link to="home">Home</router-link>
    <router-link to="places">Places</router-link>
    <router-link to="hotels">Hotels</router-link>
    <router-link to="cars">Cars</router-link>
    <router-link to="events">Events</router-link>
    <router-view/> -->
    </div>
  
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
  },
data: () => ({
    //
  })
};


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #090a0a;
  margin-top: 60px;
  background-color: rgb(181, 245, 245);
}
</style>