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
        <div class="grey--text">{{ question.date }}</div>
      </v-card-text>
      <v-card-actions>
        <span>
          <v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in question.tags" :key="i" class="title">{{
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
  import axios from '~/plugins/axios'
  export default {
    data() {
      return {
        comment: ''
      }
    },
    methods: {
      async postMessage() {
				try{
					let { data } = await axios.post("/api/answers/" , {
          respondent: this.$store.state.authUser,
          date: Date.now(),
          content: this.comment
        })
        await axios.put(`/api/questions/${this.$route.params.id}`, {
					answer: data
        })
        this.question.answer.push({
          content: this.comment,
          respondent: {
            username: this.$store.state.authName,
            url: this.$store.state.authUrl
          }
        })
				}
				catch(err){
					console.log('answer', err.message)
				}
      }
    },
    async asyncData({
      params
    }) {
      let {
        data
      } = await axios.get(`/api/questions/${params.id}`)
      return {
        question: data
      }
    }
  }

</script>
