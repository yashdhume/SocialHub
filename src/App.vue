<template>
  <v-app>
    <router-link to="home">
      <v-img :src="link" max-height="250" max-width="250"></v-img>
    </router-link>
    <router-view/>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data: () => ({
    link: "https://scontent.fyto1-1.fna.fbcdn.net/v/t1.15752-9/88009083_2433281956983476_7532929323544608768_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_oc=AQkBGqSErXa9zqWz_F_AYoV-cXDY3VMWjnX_fUxa6yPWhPqUl1CzP8RZu_SLRgwl-1w&_nc_ht=scontent.fyto1-1.fna&oh=49f6bbfcc00784a5a769cafc6c11acfa&oe=5EFAC3FA"
  }),
};
</script>
