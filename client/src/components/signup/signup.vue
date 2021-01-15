<template>
<v-app>
    <v-app-bar app dark color="black">
    <v-toolbar-title>Please fill the Registration Form </v-toolbar-title>
    <v-spacer></v-spacer>
    </v-app-bar>

  <v-content>
  <v-card width="800" height="320" class="mx-auto mt-9"> 
    <v-card-title>Registration Form</v-card-title>
    
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="20"
      label="FullName"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        v-model="password"
        :rules="passwordRules"
        error-count="5"
        required
></v-text-field>

    <v-btn color="info"
      class="mr-4"
      @click="signup"
    >
      submit
    </v-btn>
    <v-btn color="info" @click="clear">
      clear
    </v-btn>

  </v-card>
  </v-content>
  </v-app>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from 'axios';

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      password: { required, maxLength: maxLength(10) },
      
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      showPassword:true,
      passwordRules: [ 
        $v => !!$v || 'Password is required', 
        $v => ($v && $v.length >= 5) || 'Password must have 5+ characters',
        $v => /(?=.*[A-Z])/.test($v) || 'Must have one uppercase character', 
        $v => /(?=.*\d)/.test($v) || 'Must have one number', 
        $v => /([!@$%])/.test($v) || 'Must have one special character [!@#$%]' 
      ],
      error: '',
    }),

    computed: {
   
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },

      
    },

    methods: {

  
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.passwordRules = ''
        
      },

      signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/signup', newUser)
        .then(res => {
          console.log(res)
          this.error = '';
          this.$router.push('/login');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
        //this.$v.$touch()
    }
  }
  }
</script>
