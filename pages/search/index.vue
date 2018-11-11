<template>
  <div class="page">

    <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>

    <v-card>
      <v-card-title primary-title>
        Popular Topic
      </v-card-title>
      <v-card-actions>
        <div class="text-xs-center">
          <v-chip label color="pink" text-color="white" v-for="(tag, i) in tags" :key="i">
            <v-icon left dark>label</v-icon><strong>{{ tags[i] }}</strong>
          </v-chip>
        </div>
      </v-card-actions>
    </v-card>

    <v-card>
      <v-layout row wrap>
        <v-flex xs6 sm6 md6>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>User</v-toolbar-title>
              <v-spacer></v-spacer>
              <span class="grey--text hidden-sm-and-down">Filter Option</span>
              <v-btn icon>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
          <v-card v-for="(user, index) in users" :key="index" :to="'/users/'+user.id" nuxt>
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
				<v-flex xs6 sm6 md6>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>Project</v-toolbar-title>
              <v-spacer></v-spacer>
              <span class="grey--text hidden-sm-and-down">Filter Option</span>
              <v-btn icon>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
          <v-card v-for="(project, index) in projects" :key="index" :to="'/projects/' + project.id" nuxt>
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
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>



  </div>
</template>

<script>
  export default {
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
				],
				projects: [{
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
					},
					{
            name: 'Lico',
						disc: 'Hello',
						id: 3,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					},
					{
            name: 'Lico',
						disc: 'Hello',
						id: 4,
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
