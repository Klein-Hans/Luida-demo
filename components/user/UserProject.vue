<template>
    <div>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(project, index) in projects" :key="index">
          <v-card :to="'/projects/'+project._id" nuxt class="card overflow-x-hidden" height="300">
            <v-layout row wrap>
              <v-flex xs6 sm6 md6>
                <v-img :src=project.url aspect-ratio="1.0" class="image"></v-img>
              </v-flex>
              <v-flex xs6 sm6 md6>
                <v-card-title primary-title>
                    <h3 class="display-1">{{ project.name }}</h3>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-card-text>
              <div class="title">{{ project.disc }}</div>
            </v-card-text>
            <v-card-actions>
          <div class="text-xs-center">
    				<v-chip outline color="indigo darken-1" v-for="(tag, i) in project.tags" :key="i" class="title">{{ project.tags[i] }}</v-chip>
  				</div>
        </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
  export default {
    name: 'userproject',
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
  .card{
      margin: 10px;
  }

</style>
