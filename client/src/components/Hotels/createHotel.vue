<template>
  <v-container fluid >
    <v-row>
     <v-subheader></v-subheader>
        <v-text-field
          label="title"
          v-model="title"
          type="text"
        ></v-text-field>
        <v-subheader></v-subheader>
      
      <v-col cols="8">
        <v-text-field
          label="city"
          v-model="city"
          type="text"
        ></v-text-field>
        <v-subheader></v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="address"
          v-model="address"
          type="text"
        ></v-text-field>
        <v-subheader></v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="stars"
          v-model="stars"
          type="number"
        ></v-text-field>
        <v-subheader></v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="description"
          v-model="description"
          type="text"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
     <v-text-field
          label="image"
          v-model="image"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>single room</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="single room"
          v-model="single_room"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
  <v-row>
      <v-col cols="4">
        <v-subheader>double room</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="single room"
          v-model="double_room"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
     @click="createHotel"
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name:"createHotel",
     data() {
    return {
        title:"",
        city:"",
        address:"",
        stars:"",
        description:"",
        image:"",
        single_room:"",
        double_room:"",
    }},
    methods:{
      async createHotel(){
          const newhotel = await axios.post('http://localhost:5000/api/hotels/create', {
              title : this.title,
              city:this.city,
              address:this.address,
              stars:this.stars,
              description:this.description,
              image_url: this.image,
              single_room: this.single_room,
              double_room: this.double_room
          });
          if(newhotel){
              alert('hotel saved !')
              window.location.replace('/hotels');
          }
      }
  }
}
</script>