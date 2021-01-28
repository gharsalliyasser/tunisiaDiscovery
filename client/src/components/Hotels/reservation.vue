<template>
    <v-container>
        <div>
            <h1 class="title">{{hotels.title}}</h1>
          <img height="250" :src="hotels.image_url">
        </div>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name: "reservation",
    data: () => {
        return { 
            hotels:[],}
    },
    async mounted(){
       const id = this.$route.params.id
       console.log(id)
       const show = await axios.get(`http://localhost:5000/api/hotels/${id}`);
       console.log(show.data)
       this.hotels = show.data


    }
}
</script>
<style>
.title {
    color: black,
}
.container {
    position: relative;
}
</style>