
<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>information</v-card-text>
        <v-card-text class="pt-0">here we gonna put some paragraphs about the site</v-card-text>
        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Tunisia Discovery footer</strong>
        </v-card-text>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn text>
            <router-link to="/about">About</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/contact">Contact</router-link>
          </v-btn>
        </v-toolbar-items>

        <div class="hidden-sm-and-up">
          <v-menu offset-y>
            <template></template>
            <v-list class="responsiveMenu">
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/about">About</router-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/contact">Contact</router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
    </v-footer>
  </v-container>
</template>



<script>
export default {
  name: "footer",
  data: () => {},
};
</script>