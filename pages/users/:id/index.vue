<template>
  <v-layout row wrap class="page">
    <v-flex xs12 sm5 md4>
      <v-container>
        <v-card>
          <v-img :src=user.url aspect-ratio="1.0"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="display-3">{{ user.username }}</h3>
              <div class="title">{{ user.disc }}</div>
              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon x-large color="indigo">location_on</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title class="title">{{ user.campus }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon x-large color="indigo">school</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title class="title">{{ user.grade }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="text-xs-center">
              <v-chip color="indigo darken-1 title" text-color="white" v-for="(tag, i) in user.tags" :key="i">{{
                user.tags[i] }}</v-chip>
            </div>
            <v-btn fab absolute right bottom color="pink" dark @click="dialog = !dialog">
              <v-icon large>group_add</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-flex>
    <v-flex xs12 sm7 md8>
      <v-container>
        <div class="display-1">Projects</div>
        <br>
        <v-divider></v-divider>
        <br>
        <v-alert :value="true" color="info" icon="info" outline class="title" v-show="user.projects.length === 0">
          There is no project yet.
        </v-alert>
        <userproject :projects="user.projects" />
      </v-container>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <v-container>
				<div class="display-1">Questions</div>
        <br>
        <v-divider></v-divider>
        <br>
        <v-alert :value="true" color="info" icon="info" outline class="title" v-show="user.questions.length === 0">
          There is no question yet.
        </v-alert>
        <userquestion :questions="user.questions" />
      </v-container>
    </v-flex>
		<v-container>
			<v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
							<v-alert :value="true" color="info" icon="info" outline class="title" v-show="project.length === 0">
								You don't have any project yet.
							</v-alert>
              <v-select
								:items="project"
								label="Your group"
								v-model="selectProject"
								v-show="project.length !== 0"
							></v-select>
              <small class="grey--text">* Which group do you want to invite to?</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="inviteMember">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
		</v-container>
  </v-layout>
</template>

<script>
  import userproject from '~/components/user/UserProject.vue'
  import userbutton from '~/components/user/UserButton.vue'
  import userquestion from '~/components/user/UserQuestion.vue'
  import axios from '~/plugins/axios'
  export default {
    data() {
      return {
				dialog: false,
				selectProject: '',
        project: [],
        projectid: null
      }
    },
    components: {
      userproject,
      userbutton,
      userquestion
		},
		created() {
			if(this.$store.state.authProject.length > 0){
				this.$store.state.authProject.forEach(el => {
				this.project.push(el.name)
			})
			}
		},
		methods: {
			async inviteMember(){
				if(this.$store.state.authProject.length > 0){
					this.$store.state.authProject.forEach(element => {
					if(element.name == this.selectProject){
            this.projectid = element._id
					}
					})
					try{
						let { data } = await axios.post("/api/invitations", {
							user: this.user._id,
							project: this.projectid,
							date: Date.now()
            })
            this.dialog =false
					}
					catch(err){
						console.log('invite', err.message)
					}
				}
			}
		},
    async asyncData({
      params
    }) {
      let {
        data
      } = await axios.get(`/api/users/${params.id}`)
      return {
        user: data
      }
    }
  }

</script>

<style scoped>
  .spacer {
    height: 30px;
  }

</style>
