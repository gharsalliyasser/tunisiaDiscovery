<template>
  
    <v-container>
    <h1>Your Cart</h1>
    
      
    

    </v-container>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    }
  }
};
</script>

<style>
</style>