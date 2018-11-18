<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat class="hidden-xs-and-down">
      <v-icon>library_add</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile to="/add/project" nuxt>
        <v-list-tile-title>New project</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile to="/add/question" nuxt>
        <v-list-tile-title>New question</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'plusmenu',
    data() {
      return {
      }
    }
  }

</script>
