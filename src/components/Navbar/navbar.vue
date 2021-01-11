<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title> Tunisia Discovery </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/Hotels/hover"> Destinations </router-link></v-btn>
        <v-btn text><router-link to="/Hotels/x"> Hotels </router-link></v-btn>
        <v-btn text><router-link to="/Hotels/card2">Events </router-link></v-btn>
        <v-btn text><router-link to="/"> Cars </router-link></v-btn>

      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/contact">Contact</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
       <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
           
            <v-spacer></v-spacer>
            <v-btn flat>SIGN IN</v-btn>
            <v-btn color="brown lighten-3">JOIN</v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
  })
};
</script>