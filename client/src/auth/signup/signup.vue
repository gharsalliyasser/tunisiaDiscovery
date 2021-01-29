<template>
  <v-app>
    <v-content>
      <v-card width="800" height="320" class="mx-auto mt-9">
        <v-card-title>Registration Form</v-card-title>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider v-slot="{ errors }" name="Name" rules="required|max:20">
              <v-text-field v-model="name" :error-messages="errors" label="Name" required></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" name="email" rules="required|email">
              <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
          required: true,
          digits: 8,
          regex: '^(21|22|24|26|53|52|54|55|52|97|98|99)\\d{5}$'
        }"
            >
              <v-text-field v-model="number" :error-messages="errors" label="Phone Number" required></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" name="select" rules="required">
              <v-select
                v-model="select"
                :items="items"
                :error-messages="errors"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
            </validation-provider>
            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              :rules="passwordRules"
              error-count="1"
              required
            ></v-text-field>
            <v-btn class="mr-4" type="submit" :disabled="invalid">Submit</v-btn>
            {{ error}}
          </form>
        </validation-observer>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import axios from "axios";
setInteractionMode("eager");
extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});
extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
    name: "",
    email: "",
    number: "",
    select: null,
    items: ["France", "Germany", "Italia", "Russia"],
    password: "",
    passwordRules: [
      ($v) => !!$v || "Password is required",
      ($v) => ($v && $v.length >= 8) || "Password must have 8+ characters",
      ($v) => /(?=.*[A-Z])/.test($v) || "Must have one uppercase character",
      ($v) => /(?=.*\d)/.test($v) || "Must have one number",
      ($v) => /([!@$%])/.test($v) || "Must have one special character [!@#$%]",
    ],
    showPassword: false,
    error: "",
  }},
  methods: {
    async submit() {
      let newUser = {
        name: this.name,
        email: this.email,
        number: this.number,
        select: this.select,
        password: this.password,
      };
      await axios
        .post("http://localhost:5000/api/users/signup", newUser)
        .then((newUser) => {
          console.log(newUser);
          this.error = "";
          this.$router.push("/signin");
        })
        .catch((err) => {
          console.log(err.response);
          this.error = err.res.data.error;
        });
      this.$refs.observer.validate();
    },
  },
};
</script>