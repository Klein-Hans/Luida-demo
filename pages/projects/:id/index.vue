<template>
  <v-layout
    row wrap
		class="page">
    <v-flex xs12 sm5 md4>
			<v-container>
        <v-card>
            <v-img
          :src=project.url
          aspect-ratio="1.0"
        ></v-img>
				<v-card-title primary-title>
          <div>
            <h3 class="headline">{{ project.name }}</h3>
            <div class="text-xs-center">{{ project.disc }}</div>
          </div>
        </v-card-title>
				<v-card-actions>
          <div class="text-xs-center">
    				<v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in project.tags" :key="i">{{ project.tags[i] }}</v-chip>
  				</div>
        </v-card-actions>
				<div class="spacer"></div>
				<v-btn absolute right bottom dark fab icon color="pink">
            <v-icon>favorite</v-icon>
        </v-btn>
        </v-card>
				</v-container>
    </v-flex>
		<v-flex xs12 sm7 md8>
			<v-container>
        <projectmember :member=project.users />
			</v-container>
		</v-flex>
		
  </v-layout>
</template>

<script>
import projectmember from '~/components/project/ProjectMember.vue'
import axios from 'axios'
export default {
	data(){
		return{
      tabs: ['Overview', 'Projects', 'Member', 'Follows', 'Following']
    }
  },
  components: {
    projectmember
  },
  async asyncData({params}){
    const url = "http://127.0.0.1:3000/api/projects/"
    let { data } = await axios.get(`${url}${params.id}`)
    return {project: data}
  }
}
</script>

<style scoped>
.spacer{
	height: 30px;
}

</style>
