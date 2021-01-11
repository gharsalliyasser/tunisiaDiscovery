<template>
  <v-content>
    <div >
      
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      
    </div>
    <div>
      <v-container>
        
      </v-container>
    </div>
    <div>
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
             
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>
curl --request POST \
         --url 'https://api.makcorps.com/auth' \
         --header 'Content-Type: application/json' \
         --data '{
              "username":"Khalil",
              "password":"987654321123456789"
      }'
  
