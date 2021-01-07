<template>
  <v-app>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title><Menu></Menu></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
      <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn flat>Menu</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>SIGN IN</v-btn>
            <v-btn color="brown lighten-3">JOIN</v-btn>
    </v-toolbar>
    <v-content>
      <Navbar/>
    </v-content>
  </v-app>
</template>
     <script>
export default {
    name: 'navbar'
};
</script>

<style scoped>
</style>
   
    <!-- <v-main>
      <v-footer>
      <Footer/>
      </v-footer>
    </v-main> -->

<script>
import footer from './components/Footer/footer.vue';
import navbar from './components/Navbar/navbar.vue';
export default {
  name: 'App',

  components: {
    footer,
    navbar,
  },

  
    data: () => ({
    //
  }),
};
</script>
