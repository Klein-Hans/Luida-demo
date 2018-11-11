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
export default {
	data(){
		return{
      project: {
        name: 'Rakuten Luida',
        disc: 'This is internship program',
        tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
        users: [{
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
          },
          {
            name: 'Lico',
            disc: 'Hello',
            id: 3,
            tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
            url: "https://randomuser.me/api/portraits/men/35.jpg"
          },
          {
            name: 'Lico',
            disc: 'Hello',
            id: 4,
            tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
            url: "https://randomuser.me/api/portraits/men/35.jpg"
          },
          {
            name: 'Lico',
            disc: 'Hello',
            id: 5,
            tags: ['Python', 'Ruby', 'golang', 'node.js', 'Vue', 'Scala'],
            url: "https://randomuser.me/api/portraits/men/35.jpg"
          }
        ]
      },
      tabs: ['Overview', 'Projects', 'Member', 'Follows', 'Following']
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
