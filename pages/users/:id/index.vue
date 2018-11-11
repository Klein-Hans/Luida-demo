<template>
  <v-layout
    row wrap
		class="page">
    <v-flex xs12 sm5 md4>
			<v-container>
        <v-card>
            <v-img
          :src=users.url
          aspect-ratio="1.0"
        ></v-img>
				<v-card-title primary-title>
          <div>
            <h3 class="headline">{{ users.username }}</h3>
						<div class="grey--text">{{ users.name }}</div>
            <div class="text-xs-center">{{ users.disc }}</div>
          </div>
        </v-card-title>
				<v-card-actions>
          <div class="text-xs-center">
    				<v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in users.tags" :key="i">{{ users.tags[i] }}</v-chip>
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

				<v-tab href="#tab-0">
					<v-badge left>
					<span slot="badge">{{ users.projects.length }}</span>
					<span>Project</span>
					</v-badge>
					<v-icon>account_box</v-icon>
				</v-tab>
				<v-tab href="#tab-1">
					<v-badge left>
					<span slot="badge">{{ users.followers.length }}</span>
					<span>Followers</span>
				</v-badge>
				<v-icon>account_box</v-icon>
				</v-tab>
				<v-tab href="#tab-2">
					<v-badge left>
					<span slot="badge">{{ users.following.length }}</span>
					<span>Following</span>
				</v-badge>
				<v-icon>account_box</v-icon>
				</v-tab>

				<v-tabs-items v-model="model">
					<v-tab-item
					v-for="(tab, i) in tabs"
					:id="'tab-' + i"
					:key="i">
						<v-card flat>
							<userprojects :projects="users.projects" v-show="model == 'tab-0'" />
							<userfollowers :followers="users.followers" v-show="model == 'tab-1'" />
							<userfollowing :following="users.following" v-show="model == 'tab-2'" />
						</v-card>
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
export default {
	data(){
		return{
			users: {
				name: 'Kangaroo Valley Safari',
				username: 'Kangaroo Valley Safari',
				url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
				disc: 'Located two hours south of Sydney in the Southern Highlands of New South Wales',
				tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
				projects: [
					{
						name: 'Pijo',
            disc: 'Hello',
            id: 1,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					},
					{
						name: 'Pijo',
            disc: 'Hello',
            id: 2,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					}
				],
				followers: [
					{
						name: 'Pijo',
            disc: 'Hello',
            id: 1,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					},
					{
						name: 'Pijo',
            disc: 'Hello',
            id: 2,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					}
				],
				following: [
					{
						name: 'Pijo',
            disc: 'Hello',
            id: 1,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					},
					{
						name: 'Pijo',
            disc: 'Hello',
            id: 2,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					},
						{
						name: 'Pijo',
            disc: 'Hello',
            id: 3,
            url: "https://randomuser.me/api/portraits/men/35.jpg"
					}
				]
			},
			tabs: ['Projects', 'Followers', 'Following'],
			model: 'tab-0'
		}
	},
	components: {
		userprojects,
		userfollowers,
		userfollowing,
		userbutton
	}
}
</script>

<style scoped>
.spacer{
	height: 30px;
}

</style>
