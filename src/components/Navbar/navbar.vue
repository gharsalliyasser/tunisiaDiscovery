<template>

  <v-container>
    <v-toolbar class="mainHeader">
      
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text><router-link to="/home"> Home </router-link></v-btn>
        <v-btn text><router-link to="/places"> Places </router-link></v-btn>
        <v-btn text><router-link to="/hotels"> Hotels </router-link></v-btn>
        <v-btn text><router-link to="/events"> Events </router-link></v-btn>
        <v-btn text><router-link to="/cars"> Cars </router-link></v-btn>

      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu>
          
          <v-list>
            <v-list-item>
              <v-list-item-title><router-link to="/home"> Home </router-link></v-list-item-title>
              <v-list-item-title><router-link to="/places"> Places  </router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/hotels"> Hotels  </router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/events"> Events </router-link></v-list-item-title>
              <v-list-item-title><router-link to="/cars"> Cars </router-link></v-list-item-title>

            </v-list-item>
          </v-list>
        </v-menu>
      </div>
            <v-spacer></v-spacer>
            <v-btn color="blue lighten-3" router-link to="/Signin"> SIGN IN</v-btn>
            <v-btn color="blue lighten-3" router-link to="/Signup"> SIGN UP </v-btn>
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

