<template>
  <v-layout
    row wrap
		class="page">
    <v-flex xs12 sm5 md4>
			<v-container>
        <v-card>
            <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="1.0"
        ></v-img>
				<v-card-title primary-title>
          <div>
            <h3 class="headline">Kangaroo Valley Safari</h3>
						<div class="grey--text">Kangaroo Valley Safari</div>
            <div class="text-xs-center">Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
				<v-card-actions>
          <div class="text-xs-center">
    				<v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in tags" :key="i">{{ tags[i] }}</v-chip>
  				</div>
        </v-card-actions>
				<div class="spacer"></div>
				<v-btn absolute right bottom dark fab icon color="pink">
            <v-icon>edit</v-icon>
        </v-btn>
        </v-card>
				</v-container>
    </v-flex>
		<v-flex xs12 sm7 md8>
			<v-container>
			<v-tabs show-arrows slider-color="yellow" v-model="model">
				<v-tab
					v-for="(tab, i) in tabs"
					:href="'#tab-' + i"
					:key="i"
				>
					{{ tabs[i] }}
				</v-tab>
				<v-tabs-items v-model="model">
					<v-tab-item
					v-for="(tab, i) in tabs"
					:id="'tab-' + i"
					:key="i">
						<v-card flat>
							<userprojects v-show="model == 'tab-0'" />
							<userfollows v-show="model == 'tab-1'" />
							<userfollowing v-show="model == 'tab-2'" />
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
import userfollows from '~/components/user/UserFollows.vue'
import userfollowing from '~/components/user/UserFollowing.vue'
export default {
	data(){
		return{
			tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
			tabs: ['Projects', 'Follows', 'Following'],
			model: 'tab-0'
		}
	},
	components: {
		userprojects,
		userfollows,
		userfollowing
	}
}
</script>

<style scoped>
.spacer{
	height: 30px;
}

</style>
