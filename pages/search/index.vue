<template>
  <div class="page">
    <v-container>
      <div class="display-1">
        <v-icon x-large>search</v-icon>
        Search by custom tag</div>
        <v-layout row wrap>
          <v-flex xs10 sm10 md10>
            <v-text-field class="mx-3" flat label="Search" v-model="another"></v-text-field>
          </v-flex>
          <v-flex xs2 sm2 md2>
            <v-btn flat @click="searchTags(another)"><v-icon large>search</v-icon></v-btn>
          </v-flex>
        </v-layout>
    </v-container>
    <v-container>
      <div class="display-1">
        <v-icon x-large>tag</v-icon>
        Search by popular tag</div>
      <v-layout row wrap>
      <v-flex xs6 sm3 md2 v-for="(tag, index) in taglist" :key="index">
        <v-card class="card">
          <v-img
          :src=tag.url
          aspect-ratio="1.0"
          @click="searchTags(tag.name)"
        ></v-img>
        <v-card-text class="title">
          {{tag.name}}
        </v-card-text>
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
        taglist: 
        [{name: 'python', url: "https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png"},
        {name: 'matlab', url: "https://i.redd.it/1lihwxjxacxy.png"},
        {name: "C", url: "https://www.codemate.com/wp-content/uploads/2016/02/C-icon-codemate.png"},
        {name: "AI", url: "https://www.envisagenics.com/wp-content/uploads/2018/07/AI_Icon_Blue-300x291.png"},
        {name: "tensorflow", url: "https://avatars1.githubusercontent.com/u/15658638?s=280&v=4"},
        {name: "android", url: "https://png.pngtree.com/element_our/md/20180526/md_5b094360ac6d3.png"},
        {name: "ios", url: "http://www.findtinytales.com/wp-content/uploads/2018/03/103184_apple_512x512.png"},
        {name: "rasberry-pi", url: "https://raw.githubusercontent.com/iiiypuk/rpi-icon/master/256.png"},
        {name: "java", url: "https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png"},
        {name: "toeic", url: "https://lh5.ggpht.com/zlkxbbOOSH23OIPDBgxkglMLBJK--zsD1mgwCQpdaCm1zL9Hnmcq8bIBU0c1RNF28BEZ=w300"},
        {name: "c++", url: "https://cdn3.iconfinder.com/data/icons/programming-16/512/programming_6_00001-2-512.png"},
        {name: "toefl", url: "http://www.mskools.com/Content/img/toefl-inner.png"}
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

</style>
