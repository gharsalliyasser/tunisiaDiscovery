<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Tunisia Discovery Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text>
          <router-link to="/home">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/Gallery">Destinations</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/hotels">Hotels</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/events">Events</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/CarsPost">Cars</router-link>
        </v-btn>
      </v-toolbar-items> 
      
      <v-spacer></v-spacer>
      <span>Not a member yet?</span>
      <v-spacer></v-spacer>
      <v-btn color="blue lighten-3" router-link to="/signin">SIGN IN</v-btn>
      <v-btn color="blue lighten-3" router-link to="/signup">SIGN UP</v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({}),
};
</script>

