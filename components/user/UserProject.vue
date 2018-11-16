<template>
    <div>
      <v-layout row wrap>
        <v-flex xs6 sm6 md4 v-for="(project, index) in projects" :key="index">
          <v-card :to="'/users/'+project._id" nuxt class="card">
            <v-layout row wrap>
              <v-flex xs6 sm6 md6>
                <v-img :src=project.url aspect-ratio="1.0" class="image"></v-img>
              </v-flex>
              <v-flex xs6 sm6 md6>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline">{{ project.name }}</h3>
                    <div class="text-xs-center">{{ project.disc }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
              </v-flex>
            </v-layout>
            <v-card-actions>
          <div class="text-xs-center">
    				<v-chip outline color="indigo darken-1" v-for="(tag, i) in project.tags" :key="i">{{ project.tags[i] }}</v-chip>
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
