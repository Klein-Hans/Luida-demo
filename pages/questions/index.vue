<template>
  <v-container class="page">
    <v-container v-for="(post, index) in posts" :key="index" class="question">
      <v-card :to="'/questions/'+post.id" nuxt>
			<v-layout>
				<v-flex>
					
				</v-flex>
			</v-layout>
        <v-card-title primary-title>
					<div>
					<div class="headline">{{ post.title }}</div>
					<div>{{ post.content }}</div>
					</div>
        </v-card-title>
        <v-card-actions>
          <div class="tags">
						<v-icon>label</v-icon>
            <v-chip small outline color="indigo darken-1" v-for="(tag, i) in post.tags" :key="i">{{ post.tags[i] }}</v-chip>
          </div>
					<v-spacer></v-spacer>
					<div class="grey--text">{{ post.date }}</div>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
      }
		},
		async asyncData({params, store}){
      const url = "http://127.0.0.1:3000/api/posts"
      let { data } = await axios.get(url, {
        params: {
          array: store.state.tags
        }
      })
      return { posts: data }
		}
  }

</script>

<style scoped>
  .question{
		max-width: 600px;
	}
	.tags{
		margin-left: 10px;
	}

</style>
