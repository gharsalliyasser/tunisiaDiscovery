<template>
    <v-footer class="footer" padless 
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue lighten-1 text-center"
      >
      <div class="footer-content">
            <div class="about">
                <h1 class="title"><span>Tunisia</span>Discovery</h1>
                <p>
                    Completely renovated in 2014, endowed with a unique charm that of a green garden trimmed with palm trees and various plants as well as a magnificent sandy beach to which there is a direct access, Hammamet Regency Hotel provides well-being and relaxation. 
Being one of the largest in the region, our 190 rooms and suites are all fitted with air conditioning and central heating, hairdryer, satellite TV, private bath with separate toilet, balcony or terrace... 
With three restaurants and four bars, Hammamet Regency Hotel provides a choice which guarantees every kind of pleasure. 
Our main restaurant, which has a beautiful terrace overlooking the pool and garden, offers a buffet of diverse local and international cuisine, meeting everyone’s expectations. 
                </p>
            </div>
        <!-- <v-divider></v-divider> -->
            <div class="contact">
                <span><v-icon class="a"
                large
                color="white darken-2"
                >
                mdi-phone
                </v-icon > &nbsp; Phone: (216) 22 22 22 22</span>
                <span><v-icon
                large
                color="white darken-2"
                >
                mdi-mail
                </v-icon> &nbsp;Mail: contact@tunisia.com</span>
            </div>
        </div>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Tunisia Discovery</strong>
        </v-card-text>
      </v-card>
      
    </v-footer>

  
</template>
<script>
  export default {
      name: "foot",
    data: () => ({
      icons: [
        'mdi-phone',
        'mdi-email',
        // 'mdi-calendar',
        // 'mdi-delete',
      ],
      
      // padless: true,
      // variant: true,
      // absolute: true,
      // fixed: true,
    }),
  }
</script>
<style scoped>
/* .footer {
  background: rgb(137, 169, 245);
  color: white;
  height: 400px;
  width: 100%;
}
.footer .footer-content {
border: 1px solid white;
height: 350px;
display: flex;
}
.footer .footer-content .about {
    flex: 1;
    padding: 25px;
}
.footer .footer-bottom {
  background: rgb(137, 169, 245);
  color: white;
  height: 50px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-top: 20px;
}  */
</style>
