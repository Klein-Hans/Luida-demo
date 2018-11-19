<template>
    <div>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(user, index) in member" :key="index">
          <v-card :to="'/users/'+user._id" nuxt class="card overflow-x-hidden" height="300">
            <v-layout row wrap>
              <v-flex xs6 sm6 md6>
                <v-img :src=user.url aspect-ratio="1.0" class="image"></v-img>
              </v-flex>
              <v-flex xs6 sm6 md6>
                <v-card-title primary-title>
                  <div>
                    <h3 class="display-1">{{ user.username }}</h3>
                    <br>
                    <div class="title">{{ user.disc }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
              </v-flex>
            </v-layout>
            <v-card-actions>
          <div class="text-xs-center">
    				<v-chip outline color="indigo darken-1" v-for="(tag, i) in user.tags" :key="i" class="title">{{ user.tags[i] }}</v-chip>
  				</div>
        </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
  export default {
    name: 'projectmember',
    props: ["member"],
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
