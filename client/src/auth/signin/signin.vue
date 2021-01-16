<template>

  <v-container>
    <v-card-title>Registration Form</v-card-title>
   <form>
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
      v-model="number"
      :error-messages="phoneErrors"
      :counter="8"
      label="Phone"
      required
      @input="$v.number.$touch()"
      @blur="$v.number.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Nationality"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-text-field
        label="Password"
        v-model="password"
        type="password"
        :rules="passwordRules"
        :counter="10"
        required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
></v-text-field>

    <v-btn
      class="mr-4"
      @click="signup"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
  </v-container>
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
      number: { required, maxLength: maxLength(8) },
      select: { required },
      password: { required, maxLength: maxLength(10) },
      
    },

    data: () => ({
      name: '',
      email: '',
      number:'',
      items: [
        'France',
        'Germany',
        'Italia',
        'Russia',
      ],
      password: '',
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
      phoneErrors(){
         const errors = []
        if (!this.$v.number.$dirty) return errors
        !this.$v.number.maxLength && errors.push('Number must be 8 numbers')
        !this.$v.number.required && errors.push('Number is required.')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      
    },

    methods: {

  
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.number=''
        this.select = null
        this.password = ''
        this.passwordRules = ''
        
      },

      signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        number: this.number,
        select: this.select,
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
        this.$v.$touch()
    }
  }
  }
</script>