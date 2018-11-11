<template>
    <div id="create">
    <v-speed-dial
      v-model="fab"
      direction="right"
      transition="scale-transition"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>group_add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>person_add</v-icon>
      </v-btn>
    </v-speed-dial>
    </div>
</template>

<script>
export default {
    name: 'userbuttun',
    data(){
        return{
            fab: true
        }
    },
    watch: {
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      }
    }
}
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>
