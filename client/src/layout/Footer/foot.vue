<template>
  <v-footer class="footer " padless >
    <v-card flat tile width="100%" class="black  text-center">
      <div id="wrapper" class="footer-content">
        <div id="left" class="about">
          <h1 class="Z">See Tunisia through our eyes</h1>
          <p class="W">
            Completely renovated in 2014, endowed with a unique charm that of a green garden trimmed with palm trees and various plants as well as a magnificent sandy beach to which there is a direct access, Hammamet Regency Hotel provides well-being and relaxation.
            Being one of the largest in the region, our 190 rooms and suites are all fitted with air conditioning and central heating, hairdryer, satellite TV, private bath with separate toilet, balcony or terrace...
            With three restaurants and four bars, Hammamet Regency Hotel provides a choice which guarantees every kind of pleasure.
            Our main restaurant, which has a beautiful terrace overlooking the pool and garden, offers a buffet of diverse local and international cuisine, meeting everyone’s expectations.
          </p>
        </div>
        <!-- <v-divider></v-divider> -->
        <div id="right" class="contact">
          <span class="X">
            <v-icon class="a" large color="white darken-2">mdi-phone</v-icon>&nbsp; Phone: (216) 22 22 22 22
          </span>
        </div>
        <div id="right" class="contact">
          <span class="X">
            <v-icon large color="white darken-2">mdi-mail</v-icon>&nbsp;Mail: contact@tunisia.com
          </span>
                </div>

      </div>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Tunisia Discovery</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "foot",
  data: () => ({
    icons: [
      "mdi-phone",
      "mdi-email",
    ],

    // padless: true,
    // variant: true,
    // absolute: true,
    // fixed: true,
  }),
};
</script>
<style scoped>
.X {
  font-size: 25px;
  color: rgba(22, 184, 199, 0.7);
}
.W {
  font-size: 19px;
  color:rgba(22, 184, 199, 0.7);
}
.Z {
  font-size: 30px;
  color:rgba(22, 184, 199, 0.7);
}
.v-sheet.v-footer {
color: black !important;
}
#left {
  flex: 1 1 45%;
  color: white
}

#right {
  flex: 1 1 45%;
  /* top: 100px; */
  }
</style>
