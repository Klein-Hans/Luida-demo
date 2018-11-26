<template>
    <div>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(project, index) in projects" :key="index">
          <v-card :to="'/projects/'+project._id" nuxt class="card">
            
                <v-img :src=project.url aspect-ratio="1.0"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="display-1">{{project.name}}</h3>
                <div class="title disc">{{ project.disc }}</div>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions>
          <div class="text-xs-center">
    				<v-chip color="indigo darken-1" v-for="(tag, i) in project.tags" :key="i" class="title" text-color="white">{{ project.tags[i] }}</v-chip>
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
  .disc{
    max-height: 100px;
    overflow: scroll;
  }

</style>
