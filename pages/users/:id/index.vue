<template>
  <v-layout
    row wrap
		class="page">
    <v-flex xs12 sm5 md4>
			<v-container>
        <v-card>
            <v-img
          :src=user.url
          aspect-ratio="1.0"
        ></v-img>
				<v-card-title primary-title>
          <div>
						<v-list>
									<v-list-tile>
										<v-list-tile-content class="display-3">{{ user.username }}</v-list-tile-content>
									</v-list-tile>
									<br>
									<v-list-tile>
										<v-list-tile-content class="title">{{ user.disc }}</v-list-tile-content>
									</v-list-tile>
									<br>
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
    				<v-chip color="indigo darken-1 title" text-color="white" v-for="(tag, i) in user.tags" :key="i">{{ user.tags[i] }}</v-chip>
  				</div>
					<v-btn fab absolute right bottom color="pink" dark>
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
				<v-alert
					:value="true"
					color="info"
					icon="info"
					outline
					class="title"
					v-show="user.projects.length === 0"
				>
      		There is no project yet.
    		</v-alert>
				<userproject :projects="user.projects" />
			</v-container>
		</v-flex>
		<v-flex xs12 sm12 md8>
			<v-container>
			<v-alert
					:value="true"
					color="info"
					icon="info"
					outline
					class="title"
					v-show="user.questions.length === 0"
				>
      		There is no question yet.
    		</v-alert>
				</v-container>
		</v-flex>
  </v-layout>
</template>

<script>
import userproject from '~/components/user/UserProject.vue'
import userbutton from '~/components/user/UserButton.vue'
import axios from 'axios'
export default {
	data(){
		return{
			model: 'tab-0'
		}
	},
	components: {
		userproject,
		userbutton
	},
	async asyncData({params}) {
		const url = "http://127.0.0.1:3000/api/users/"
		let { data } = await axios.get(`${url}${params.id}`)
		return { user: data }
	}
}
</script>

<style scoped>
.spacer{
	height: 30px;
}

</style>
