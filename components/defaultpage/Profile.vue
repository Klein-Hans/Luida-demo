<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat class="hidden-xs-only"> 
      <v-avatar>
        <img :src=$store.state.authUrl>
      </v-avatar>
    </v-btn>
    <v-list>
      <v-list-tile :to="'/users/' + $store.state.authUser">
        <v-list-tile-title>Your Profile</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-title>Help</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-title>Setting</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="signOut">
        <v-list-tile-title>SignOut</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'profileInNavbar',
    data() {
      return {
      }
    },
    methods: {
      signOut(){
        this.$store.commit('signOut')
        this.$router.push('/')
      }
    }
  }

</script>
