<template>
<v-container fluid >
      <v-row>
      <v-col cols="4">
        <v-subheader>name</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="name"
          v-model="name"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>description</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="description"
          v-model="description"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader> image</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="image"
          v-model="image"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

     <v-row>
      <v-col cols="4">
        <v-subheader>  category </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label=" category"
          v-model=" category"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  videolink </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label=" videolink"
          v-model=" videolink"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  info </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label=" info"
          v-model=" info"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  extraimage1 </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="  extraimage1"
          v-model="  extraimage1"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  extraimage2 </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="  extraimage2"
          v-model="  extraimage2"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  extraimage3 </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="  extraimage3"
          v-model="  extraimage3"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  extraimage4 </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="  extraimage4"
          v-model="  extraimage4"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  extraimage5 </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="  extraimage5"
          v-model="  extraimage5"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>  extraimage6 </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="  extraimage6"
          v-model="  extraimage6"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
     @click="createplace"
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
    name:"createplace",
     data() {
    return {
        name:"",
        description:"",
        image:"",
        category:"",
        videolink:"",
        info:"",
        extraimage1:"",
        extraimage2:"",
        extraimage3:"",
        extraimage4:"",
        extraimage5:"",
        extraimage6:"",
    }},
    methods:{
      async createcar(){
          const newplace = await axios.post('http://localhost:5000/api/place/createPlace', {
              name : this.name,
              description:this.description,
              imageUrl: this.image,
              category: this.category,
              videolink: this.videolink,
              info:this.info,
              extraimage1:this.extraimage1,
              extraimage2:this.extraimage2,
              extraimage3:this.extraimage3,
              extraimage4:this.extraimage4,
              extraimage5:this.extraimage5,
              extraimage6:this.extraimage6,
          });
          if(newplace){
              alert('place saved !')
              window.location.replace('/Gallery');
          }
      }
  }
}
</script>
