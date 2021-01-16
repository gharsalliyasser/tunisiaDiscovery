<template>
  <v-container fluid>
    <!-- event -->
    <v-row justify="space-around">
      <v-col cols="4" v-for="event in events" :key="event.id">
        <div >
          <div>
            <h3>{{event.title}}</h3>
          </div>
          <v-img :src="event.image" aspect-ratio="1.7"></v-img>
          <br />
          <p>
            {{event.description}}
            <strong>{{event.date}}</strong>
          </p>

          <div class="text-center">
            <div class="my-2">
              <a :href="event.youtubeLink" target="_blank">
                <v-btn depressed color="primary">watch video</v-btn>
              </a>
              <v-btn depressed color="primary">Buy Ticket</v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Plan a Visit to Tunisia -->
    <v-divider></v-divider>

    <h2 data-orig-font="48px" style="font-size: 40px;">Plan a Visit to Tunisia</h2>

    <p>
      Participating in one of the many festivals in Tunisia is a great way to experience Tunisia.
      If you are interested in visiting Tunisia our travel experts
      are happy to assist you to plan a Tunisia tour that could include one or more of these festivals in Tunisia.
    </p>
  </v-container>
</template>


<script>
export default {
  name: "Events",
  props: {},
  method: {
    WatchVideo() {},
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "International Festival of Sousse",
          image:
            "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/117099366_1036949290110505_2677540095970272956_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=Kxzs30d-KdkAX9nJx3b&_nc_oc=AQmrLVw1Y3IVTvQAT3Y0ne-wJVRR61ihuYtbmalIWyEcR0yfzl00I3TjZMsQ9QomDCU&_nc_ht=scontent.ftun2-1.fna&oh=12c1f36490749c483aa8a838bd6c77d5&oe=60235378",
          description: `International Festival of Sousse serves to add even more to the mix,
            and this year marks the 47th edition of the festival.
            Tunisian musicians and artists dominate the lineup at the festival,
            and performers from neighboring countries as well as Romania, Italy, Belgium, Syria and Lebanon add their artistic stylings into the mix,
            and Russia is also sending its Symphonic Orchestra across to Tunisia.`,
          date: "August 13",
          youtubeLink:
            "https://www.youtube.com/watch?v=1dn60yPZG3A&ab_channel=MercifulServant",
        },
        {
          id: 2,
          title: "International Festival of Sousse",
          image:
            "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/117099366_1036949290110505_2677540095970272956_o.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=Kxzs30d-KdkAX9nJx3b&_nc_oc=AQmrLVw1Y3IVTvQAT3Y0ne-wJVRR61ihuYtbmalIWyEcR0yfzl00I3TjZMsQ9QomDCU&_nc_ht=scontent.ftun2-1.fna&oh=12c1f36490749c483aa8a838bd6c77d5&oe=60235378",
          description: `International Festival of Sousse serves to add even more to the mix,
            and this year marks the 47th edition of the festival.
            Tunisian musicians and artists dominate the lineup at the festival,
            and performers from neighboring countries as well as Romania, Italy, Belgium, Syria and Lebanon add their artistic stylings into the mix,
            and Russia is also sending its Symphonic Orchestra across to Tunisia.`,
          date: "August 13",
          youtubeLink:
            "https://www.youtube.com/watch?v=U02uHaQunD4&ab_channel=DirtyWaterMedia",
        },
      ],
    };
  },
};
</script>


