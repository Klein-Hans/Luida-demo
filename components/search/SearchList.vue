<template>
  <div>
    <v-tabs show-arrows centered height="300px">
      <v-tab v-for="(user, index) in projects" :key="index">
        <v-card :to="'/users/'+user.id" nuxt class="card">
          <v-layout row wrap>
            <v-flex xs6 sm6 md6>
              <v-img :src=user.url aspect-ratio="1.0" class="image"></v-img>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline">{{ user.name }}</h3>
                  <div class="text-xs-center">{{ user.disc }}</div>
                </div>
              </v-card-title>
              <v-card-actions>
              </v-card-actions>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <div class="text-xs-center">
              <v-chip outline color="indigo darken-1" v-for="(tag, i) in user.tags" :key="i">{{ user.tags[i] }}</v-chip>
            </div>
          </v-card-actions>
        </v-card>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    name: 'searchlist',
    props: ["projects"],
    data() {
      return {
      }
    }
  }

</script>

<style scoped>
  .image {
    margin: 10%;

  }

  .card {
    margin: 10px;
  }

</style>
