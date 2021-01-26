<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Tunisia Discovery Project</v-toolbar-title>

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
      <div class="navdiv" v-if="!this.islogged" >
  
      <span class="name_loggedin" >Not a member? </span>

      <v-btn class="navbar_space2" color="blue lighten-3" router-link to="/signin">SIGN IN</v-btn>
      <v-btn  color="blue lighten-3" router-link to="/signup">SIGN UP</v-btn>
      </div>
      <div class="navdiv2" v-else-if='this.islogged'>
      <span class="name_loggedin">{{this.islogged}}</span>
      
      <v-btn @click="logout()" class="navbar_space" color="blue lighten-3" >logout</v-btn>
      </div>
      
    </v-toolbar>
  </v-container>
</template>

<script>
const Cookie =require('js-cookie')
export default {
  name: "navbar",
  data: () => ({
    islogged:Cookie.get('name')
  }),
  methods:{
    logout(){
      Cookie.remove('name')
      window.location.replace('/')
    }
  }

};
</script>

<style scoped>
.navdiv{
 display:flex;
 justify-content:space-between;
 padding:0 5%
 
}
.name_loggedin{
  justify-self:center;
  align-self: center;
}
.mainHeader{
  display:flex;
  justify-content:space-between
}
.navdiv2{
 display:flex;
 justify-content:space-between;

 
}
.navbar_space{
  margin-left:10rem;
}
.navbar_space2{
   margin-left:5rem;
}
</style>