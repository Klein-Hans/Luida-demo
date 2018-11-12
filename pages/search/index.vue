<template>
  <div class="page">

    <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>

    <v-card>
      <v-card-title primary-title>
        Popular Topic
      </v-card-title>
      <v-card-actions>
        <v-item-group multiple>
          <v-item v-for="(tag, i) in taglist" :key="i">
            <v-chip slot-scope="{ active, toggle }" :selected="active" @click="toggle" label color="#37474F"
              text-color="white">
              <v-icon left dark>label</v-icon>
              <strong>{{ taglist[i] }}</strong>
            </v-chip>
          </v-item>
        </v-item-group>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-text>
        <v-container>
          <div class="title">キャンパス</div>
          <v-layout row wrap>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="神楽坂" value="神楽坂"></v-checkbox>
            </v-flex>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="葛飾" value="葛飾"></v-checkbox>
            </v-flex>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="野田" value="野田"></v-checkbox>
            </v-flex>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="長万部" value="長万部"></v-checkbox>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <br>
          <div class="title">学年</div>
          <v-layout row wrap>
            <v-flex xs3 sm3 md3 v-for="(g, i) in grade" :key="i">
              <v-checkbox :label=grade[i] :value=grade[i]></v-checkbox>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card v-for="(tag, index) in tags" :key="index">
      <v-card-title primary-title>{{ tag.name }}</v-card-title>
      <v-card-title primary-title>Projects</v-card-title>
      <searchlist :projects="tag.projects" />
      <v-card-title primary-title>Users</v-card-title>
      <searchuser :users="tag.users" />
    </v-card>


  </div>
</template>

<script>
  import searchlist from '~/components/search/SearchList'
  import searchuser from '~/components/search/SearchUser'
  export default {
    components: {
      searchlist,
      searchuser
    },
    data() {
      return {
        grade: ['D2', 'D1', 'M2', 'M1', 'B4', 'B3', 'B2', 'B1'],
        taglist: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala', 'Java', 'Nuxt', 'Firebase', 'PHP', 'C++', 'Julia',
          'Javascript'
        ],
        tags: [
          {
            name: 'python',
            users: [
              {
                name: 'Pijo',
                disc: 'Hello',
                id: 1,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              }
            ],
            projects: [
              {
                name: 'Pijo',
                disc: 'Hello',
                id: 1,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },{
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              }
            ]
          },
          {
            name: 'ruby',
            users: [
              {
                name: 'Pijo',
                disc: 'Hello',
                id: 1,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              }
            ],
            projects: [
              {
                name: 'Pijo',
                disc: 'Hello',
                id: 1,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                name: 'Lico',
                disc: 'Hello',
                id: 2,
                tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
                url: "https://randomuser.me/api/portraits/men/35.jpg"
              }
            ]
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
