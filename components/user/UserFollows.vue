<template>
    <v-card>
      <v-layout row wrap>
        <v-flex xs6 sm6 md4 v-for="(user, index) in users" :key="index">
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
                <v-card-actions>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
</template>

<script>
  export default {
    name: 'userfollows',
    data() {
      return {
        tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
        users: [{
            name: 'Pijo',
            disc: 'Hello',
            id: 1,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
          },
          {
            name: 'Lico',
            disc: 'Hello',
            id: 2,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
          }
        ]
      }
    }
  }

</script>

<style scoped>
  .image {
    margin: 10%;

  }

</style>
