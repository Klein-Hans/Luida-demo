<template>
<v-layout row wrap>
  <v-flex xs12 sm6 md6>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height=800>
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">Rikahub</h1>
      <h4 class="subheading">Build your community and find your body!</h4>
    </v-layout>
    </v-parallax>
  </v-flex>
  <v-flex xs12 sm6 md6>
    <v-layout align-center column justify-center>
      <home />
    </v-layout>
  </v-flex>
</v-layout>
</template>

<script>
import home from '~/components/home.vue'
export default {
  components: {
    home
  }
}
</script>

<style scoped>

</style>
