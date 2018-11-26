<template>
  <div class="page">
    <v-container>
      <div class="display-1">
        <v-icon x-large>search</v-icon>
        Search by custom tag</div>
        
            <v-text-field class="mx-3" flat label="Search" v-model="another" append-icon="search" @click:append="searchTags(another)" @keyup.enter="searchTags(another)"></v-text-field>
    </v-container>
    <v-container>
      <div class="display-1">
        <v-icon x-large>tag</v-icon>
        Search by popular tag</div>
      <v-layout row wrap>
      <v-flex xs6 sm3 md2 v-for="(tag, index) in taglist" :key="index">
        <v-card class="card" >
          <div class="icon-card">
          <img :src="tag.icon" @click="searchTags(tag.name)">
          <div class="title">{{ tag.name }}</div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    <v-container>
      <div class="display-1">
        <v-icon x-large>person</v-icon>
        Search by student information</div>
      <br>
      <p class="title">Campus</p>
      <v-layout row wrap>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="神楽坂" value="神楽坂" v-model="selectedByCampus"></v-checkbox>
            </v-flex>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="葛飾" value="葛飾" v-model="selectedByCampus"></v-checkbox>
            </v-flex>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="野田" value="野田" v-model="selectedByCampus"></v-checkbox>
            </v-flex>
            <v-flex xs3 sm3 md3>
              <v-checkbox label="長万部" value="長万部" v-model="selectedByCampus"></v-checkbox>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <br>
          <p class="title">Grade</p>
          <v-layout row wrap>
            <v-flex xs3 sm3 md3 v-for="(g, i) in grade" :key="i">
              <v-checkbox :label=grade[i] :value=grade[i] v-model="selectedByGrade"></v-checkbox>
            </v-flex>
          </v-layout>
          <v-container>
            <v-btn block color="red lighten-1" class="white--text" :disabled="selectedByGrade.length === 0 || selectedByCampus.length === 0" @click="searchByInfo">
              Search
              <v-icon right>search</v-icon>
            </v-btn>
          </v-container>
          <div class="display-1">
        <v-icon x-large>group</v-icon>
        Project</div>
        <br>
        <v-divider></v-divider>
        <br>
        <v-alert :value="true" color="info" icon="info" outline class="title" v-show="users.length === 0">
          No user matches the specified search criteria.
        </v-alert>
          <userproject :projects=projects id="search-result" />
          <br>

          <div class="display-1">
        <v-icon x-large>person</v-icon>
        Person</div>
        <br>
        <v-divider></v-divider>
        <br>
        <v-alert :value="true" color="info" icon="info" outline class="title" v-show="projects.length === 0">
          No project matches the specified search criteria.
        </v-alert>
          <projectmember :member=users />
    </v-container>
  </div>
</template>

<script>
  import projectmember from '~/components/project/ProjectMember.vue'
  import userproject from '~/components/user/UserProject.vue'
  import axios from '~/plugins/axios'
  import * as easings from 'vuetify/es5/util/easing-patterns'

  export default {
    components: {
      projectmember,
      userproject
    },
    methods: {
      async searchTags(element){
        console.log('touched')
        var array = []
        array.push(element)
        try{
          let { data } = await axios.get('/api/search/users', {
          params: {
            array: array
          }
        })
        this.users = data
        }
        catch(err){
          console.log(err.message)
        }
        try{
          let { data } = await axios.get('/api/search/projects', {
          params:{
            array: array
          }
        })
        this.projects = data
        this.$vuetify.goTo("#search-result",{
          offset: -200
        })
        }
        catch(err){
          console.log(err.message)
        }
        
        
      },
      async searchByInfo(grade, campus){
        console.log('search started')
        let { data } = await axios.get('/api/search/users/byinfo', {
          params: {
            grade: this.selectedByGrade,
            campus: this.selectedByCampus
          }
        })
        this.users = data
        this.$vuetify.goTo("#search-result")
      }
    },
    data() {
      return {
        another: '',
        users: [],
        projects:[],
        selectedByCampus: [],
        selectedByGrade: [],
        grade: ['D2', 'D1', 'M2', 'M1', 'B4', 'B3', 'B2', 'B1'],
        taglist: [
          {name: "matlab", icon: "https://img.icons8.com/nolan/64/000000/matlab.png"},
          {name: "python", icon: "https://img.icons8.com/color/64/000000/python.png"},
          {name: "ruby", icon: "https://img.icons8.com/color/64/000000/ruby-programming-language.png"},
          {name: "c++", icon: "https://img.icons8.com/color/64/000000/c-plus-plus-logo.png"},
          {name: "visual studio", icon: "https://img.icons8.com/color/64/000000/visual-studio.png"},
          {name: "android", icon: "https://img.icons8.com/dusk/64/000000/android.png"},
          {name: "ios", icon: "https://img.icons8.com/nolan/64/000000/ios-logo.png"},
          {name: "semiconductor", icon: "https://img.icons8.com/color/64/000000/smartphone-cpu.png"},
          {name: "architectual", icon: "https://img.icons8.com/doodle/64/000000/museum.png"},
          {name: "physics", icon: "https://img.icons8.com/dusk/64/000000/physics.png"},
          {name: "chemical", icon: "https://img.icons8.com/nolan/64/000000/test-tube.png"},
          {name: "docker", icon: "https://img.icons8.com/color/64/000000/docker.png"}
        ]
            
      }
    }
  }

</script>

<style scoped>
  .card{
    margin:10px;
    cursor: pointer;
  }
  .icon-card{
    text-align: center;
  }

</style>
