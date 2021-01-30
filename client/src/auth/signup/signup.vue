<template>
  <v-app>
      <v-card id="card" width="800" height="460" class="mx-auto mt-9">
        <v-card-title>Registration Form</v-card-title>
          <v-form 
          ref="form"
    v-model="valid"
    lazy-validation
          @submit.prevent="submit">
            <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Full Name"
      required
    ></v-text-field>
             <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
             <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 8,
        }"
      >
        <v-text-field
          v-model="number"
          :counter="8"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
      </validation-provider>
            <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Country of origin is required']"
      label="Country of origin"
      required
    ></v-select>
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
            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
          </v-form>
      </v-card>
  </v-app>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
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
    // ValidationObserver,
  },
  data() {
    return {
      name: "",
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      number: "",
      select: null,
      items: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
      password: "",
      passwordRules: [
        ($v) => !!$v || "Password is required",
        ($v) => ($v && $v.length >= 8) || "Password must have 8+ characters",
        ($v) => /(?=.*[A-Z])/.test($v) || "Must have one uppercase character",
        ($v) => /(?=.*\d)/.test($v) || "Must have one number",
        ($v) =>
          /([!@$%])/.test($v) || "Must have one special character [!@#$%]",
      ],
      showPassword: false,
      error: "",
    };
  },
  methods: {
    reset () {
        this.$refs.form.reset()
      },
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
<style>
#card {
   background-color:rgba(0, 0, 0, 0.171)
}
</style>