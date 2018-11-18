<template>
    <v-card>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(user, index) in projects" :key="index">
          <v-card :to="'/'+user.id" nuxt>
            <v-layout row wrap>
              <v-flex xs6 sm6 md6>
                <v-img :src=user.url aspect-ratio="1.0" class="image"></v-img>
              </v-flex>
              <v-flex xs6 sm6 md6>
                <v-card-title primary-title>
                  <div>
                    <v-list>
									<v-list-tile>
										<v-list-content class="headline">{{ user.name }}</v-list-content>
									</v-list-tile>
									<br>
									<v-list-tile>
										<v-list-content class="title">{{ user.disc }}</v-list-content>
									</v-list-tile>
									<br>
            </v-list>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-card-actions>
          <div class="text-xs-center">
    				<v-chip outline color="indigo darken-1" v-for="(tag, i) in user.tags" :key="i" class="headline">{{ user.tags[i] }}</v-chip>
  				</div>
        </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
</template>

<script>
  export default {
    name: 'userprojects',
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

</style>
