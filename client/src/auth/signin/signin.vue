
<template>
  <v-app>
    <v-content>
      <v-card width="800" height="320" class="mx-auto mt-9">
        <v-card-title> Let's go</v-card-title>
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

        <v-btn color="info" class="mr-4" @click="signin" >submit</v-btn>
        <v-btn color="info" @click="clear">clear</v-btn>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name:"signin",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    password: { required, maxLength: maxLength(10) },
  },

  data: () => 
  ({
    email: "",
    password: "",
    showPassword: false,
    passwordRules: [
      ($v) => !!$v || "Password is required",
      ($v) => ($v && $v.length >= 5) || "Password must have 5+ characters",
      ($v) => /(?=.*[A-Z])/.test($v) || "Must have one uppercase character",
      ($v) => /(?=.*\d)/.test($v) || "Must have one number",
      ($v) => /([!@$%])/.test($v) || "Must have one special character [!@#$%]",
    ],
    error: "",
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.passwordRules = "";
    },

    async signin(){
            const userdata = await axios.post('/api/users/signin', {
                email : this.email,
                password: this.password
            });
            if(userdata.data){
                this.email = '';
                this.password = '';
                window.location.replace('/home')
            } else {
                this.email = '';
                this.password = '';
                alert("your information are wrong please check your inputs")
            }
        }
  },
};
</script>
