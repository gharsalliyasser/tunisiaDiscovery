<template>

   <v-app>
    <v-content>
      <v-card width="800" height="320" class="mx-auto mt-9">
        <v-card-title>Login Form</v-card-title>
   <form>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
        label="Password"
        v-model="password"
        type="password"
        required
></v-text-field>

    <v-btn
      class="mr-4"
      @click="signup"
    >
      submit
    </v-btn>
    {{ error }}
  </form>
  
  </v-card>
  </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios';

 export default {
    name: "Signin",
    

    data: () => ({
      
      email: '',
      password: '',
      error: '',
    }),

    methods:{

      signup() {
      const user = {
                email: this.email,
                password: this.password
      }
      axios.post('/api/users/signin', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/home');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        }) 
  }
    }
 }
  
</script>