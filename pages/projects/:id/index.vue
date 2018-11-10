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
            <h3 class="headline">Project Name</h3>
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
        <projectmember />
			</v-container>
		</v-flex>
		
  </v-layout>
</template>

<script>
import projectmember from '~/components/project/ProjectMember.vue'
export default {
	data(){
		return{
			tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
            tabs: ['Overview', 'Projects', 'Member', 'Follows', 'Following'],
            members: [
                {name: 'Pijo', url: "https://randomuser.me/api/portraits/men/35.jpg"},
                {name: 'Lico', url: "https://randomuser.me/api/portraits/men/35.jpg"}
            ]
    }
  },
  components: {
    projectmember
  }
}
</script>

<style scoped>
.spacer{
	height: 30px;
}

</style>
