<template>
  <v-main>
    
  <div class="headline white--text pa-2">Home</div>
          

    <div class="app">
      <c />
    </div>
    
    <div>
      <v-container>
        <p>
          Tunisia is close to the main European capitals and has plenty of
          connecting flights to these every week. As well as the convenience of
          the flight and the savings in transport costs, Tunisia is a fantastic
          destination for shorter events in an exotic location. There’s the
          Sahara (which has been used as the location for many films, including
          the classic Star Wars saga) as well as prestigious sites like the El
          Dem amphitheatre. Tunisia is the perfect destination for product
          launches and commemorations, combining originality and solutions to
          suit all budgets.
        </p>
        <v-row>
          <v-card>
            <div class="title">Tunisia is close to the main European capitals and has plenty of
          connecting flights to these every week. As well as the convenience of
          the flight and the savings in transport costs, Tunisia is a fantastic
          destination for shorter events in an exotic location. There’s the
          Sahara (which has been used as the location for many films, including
          the classic Star Wars saga) as well as prestigious sites like the El
          Dem amphitheatre. Tunisia is the perfect destination for product
          launches and commemorations, combining originality and solutions to
          suit all budgets.</div>
          </v-card>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import c from '../Slideshow/c';
export default {
  name: "home",
  data() {
    return {
      
    };
  },
  components: {
     c
  },
};
</script>