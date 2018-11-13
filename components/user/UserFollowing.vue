<template>
    <v-card>
      <v-layout row wrap>
        <v-flex xs6 sm6 md4 v-for="(user, index) in following" :key="index">
          <v-card :to="'/'+user.id" nuxt>
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
              </v-flex>
            </v-layout>
            <v-card-actions>
          <v-layout row wrap>
                <v-flex xs12 sm12>
                  <div class="text-xs-center">
                <v-list>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">location_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-title>{{ user.campus }}</v-list-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">school</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-title>{{ user.grade }}</v-list-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </div>
                </v-flex>
                <v-flex xs12 sm12>
                  <div class="text-xs-center">
                  <v-chip outline color="indigo darken-1" v-for="(tag, i) in user.tags" :key="i">{{ user.tags[i] }}</v-chip>
                </div>
                </v-flex>
                
              </v-layout>
        </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
</template>

<script>
  export default {
    name: 'userfollowing',
    props: ["following"],
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

</style>
