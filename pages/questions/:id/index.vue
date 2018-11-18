<template>
  <v-container class="page">
    <v-card>
      <v-card-title class="title">
        <v-avatar>
          <img :src=question.poster.url>
        </v-avatar>
        <h1 class="display-1">&nbsp;&nbsp;{{ question.title }}</h1>
      </v-card-title>
      <v-card-text class="headline">
        {{ question.content }}
        <div>{{ question.date }}</div>
      </v-card-text>
      <v-card-actions>
        <span>
          <v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in question.tags" :key="i">{{
            question.tags[i] }}</v-chip>
        </span>
        <v-spacer></v-spacer>
        <v-icon color="yellow darken-2">
          star
        </v-icon>
      </v-card-actions>
    </v-card>

    <v-timeline dense v-show="question.answer.length > 0">
			<v-timeline-item
				v-for="(item, index) in question.answer" :key="index" color="amber accent-4"
			>
			
			<v-card>
				<v-card-title class="title">
					<v-avatar>
          <img :src=item.respondent.url>
        </v-avatar>
				&nbsp;&nbsp;
					{{ item.respondent.username }}</v-card-title>
				<v-card-text class="headline">{{ item.content }}</v-card-text>
			</v-card>
			</v-timeline-item>
    </v-timeline>
    <v-container fluid grid-list-md>
      <v-card>
        <v-card-title>
          <v-avatar>
            <img :src=$store.state.authUrl>
          </v-avatar>
          <span><strong>コメントを投稿する</strong></span>
        </v-card-title>
        <v-card-text>
          <v-textarea background-color="white" name="input-7-1" box auto-grow v-model="comment"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="postMessage">Submit</v-btn>
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
        comment: ''
      }
    },
    methods: {
      async postMessage() {
				const url = "http://127.0.0.1:3000/api/"
				try{
					let { data } = await axios.post(`${url}answers/` , {
          respondent: this.$store.state.authUser,
          date: Date.now(),
          content: this.comment
				})
				}
				catch(err){
					console.log('answer', err.message)
				}
				try{
					this.question.answer.push(adata.data._id)
				var qdata = await axios.put(`${url}questions/${this.$route.params.id}`, {
					answer: data
				})
				}
				catch(err){
					console.log('question', err)
				}
      }
    },
    async asyncData({
      params
    }) {
      const url = "http://127.0.0.1:3000/api/questions/"
      let {
        data
      } = await axios.get(`${url}${params.id}`)
      return {
        question: data
      }
    }
  }

</script>
