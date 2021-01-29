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
      @click="signin()"
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
  const Cookie =require('js-cookie')
 export default {
    name: "Signin",
    data() {
    return {
      email: '',
      password: '',
      error: '',
    }},
    methods:{
     async signin() {
      const user = {
                email: this.email,
                password: this.password
      }
     await axios.post('http://localhost:5000/api/users/signin', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            Cookie.set('name',res.data.user.name)
            Cookie.set('email',res.data.user.email)
            Cookie.set('number',res.data.user.number)
            localStorage.setItem('token', res.data.token);
            this.$router.push('/home');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        }) 
        document.location.reload(false)
  }
    }
 }
</script>