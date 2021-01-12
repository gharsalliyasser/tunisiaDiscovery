<template>
  <v-app>
    <v-app-bar app dark color="black">
      <v-toolbar-title>Please fill the Login Form </v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-app-bar>

    <v-content>
      <v-card width="500" heigth="200" class="mx-auto mt-9">
        <v-card-title>Login Form</v-card-title>
        <v-card-text>
        <v-text-field label="email" prepend-icon="mdi-account-circle" />
        <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
      </v-card-text>
            <v-divider></v-divider>
      <v-card-actions>
      <v-btn @click="signin" color="info">Login</v-btn>
      </v-card-actions>
      </v-card>
    </v-content>

  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}  </v-card-text>
    </v-card>
  </v-footer>

  </v-app>
</template>


<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    showPassword:true,
    };
  },

  methods: {
  
  clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.passwordRules = ''
        
      },


    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/login", user).then(
        (res) => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/");
          }
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
    },
  },
};
</script>