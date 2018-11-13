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
										<v-list-content class="headline">{{ user.username }}</v-list-content>
									</v-list-tile>
									<v-list-tile>
										<v-list-content class="grey--text">{{ user.name }}</v-list-content>
									</v-list-tile>
									<br>
									<v-list-tile>
										<v-list-content class="text-xs-center">{{ user.disc }}</v-list-content>
									</v-list-tile>
									<br>
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
        </v-card-title>
				<v-card-actions>
          <div class="text-xs-center">
    				<v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in user.tags" :key="i">{{ user.tags[i] }}</v-chip>
  				</div>
        </v-card-actions>
				<div class="spacer"></div>
					<userbutton />
        </v-card>
				</v-container>
    </v-flex>
		<v-flex xs12 sm7 md8>
			<v-container>
			<v-tabs show-arrows slider-color="yellow" v-model="model" icons-and-text centered>

				<v-tab href="#tab-1">
					<v-badge left>
					<span slot="badge">{{ user.projects.length }}</span>
					<span>Project</span>
					</v-badge>
					<v-icon>account_box</v-icon>
				</v-tab>
				<v-tab href="#tab-2">
					<v-badge left>
					<span slot="badge">{{ user.followers.length }}</span>
					<span>Followers</span>
				</v-badge>
				<v-icon>account_box</v-icon>
				</v-tab>
				<v-tab href="#tab-3">
					<v-badge left>
					<span slot="badge">{{ user.following.length }}</span>
					<span>Following</span>
				</v-badge>
				<v-icon>account_box</v-icon>
				</v-tab>

				<v-tabs-items v-model="model">
					<v-tab-item
					v-for="i in 3"
					:id="'tab-' + i"
					:key="i">
							<userprojects :projects="user.projects" v-show="model == 'tab-1'" />
							<userfollowers :followers="user.followers" v-show="model == 'tab-2'" />
							<userfollowing :following="user.following" v-show="model == 'tab-3'" />
					</v-tab-item>
				</v-tabs-items>
			</v-tabs>
			</v-container>
		</v-flex>
		
  </v-layout>
</template>

<script>
import userprojects from '~/components/user/UserProjects.vue'
import userfollowers from '~/components/user/UserFollowers.vue'
import userfollowing from '~/components/user/UserFollowing.vue'
import userbutton from '~/components/user/UserButton.vue'
import axios from 'axios'
export default {
	data(){
		return{
			model: 'tab-0'
		}
	},
	components: {
		userprojects,
		userfollowers,
		userfollowing,
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
