<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-title>
      <v-layout row wrap spacer align-center>
        <v-flex xs2 sm2 md2>
          <v-avatar>
            <img :src=question.poster.url>
          </v-avatar>
        </v-flex>
        <v-flex xs1 sm1 md1>
        </v-flex>
        <v-flex xs1 sm1 md1>
          <span><strong>{{ question.title }}</strong></span>
        </v-flex>
        <v-spacer></v-spacer>
				<v-flex xs4 sm4 md4>
					<v-layout>
          <v-flex xs12 sm12 md12>{{ question.date }}</v-flex>
          <v-flex xs12 sm12 md12>
            <v-icon color="yellow darken-2">
              star
            </v-icon>
            <span>2</span>
          </v-flex>
        </v-layout>
				</v-flex>

      </v-layout>
      <v-alert :value="true" outline color="black">
        {{ question.content }}
      </v-alert>
      <div class="text-xs-center">
        <v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in question.tags" :key="i">{{ question.tags[i] }}</v-chip>
      </div>

    </v-card-title>
    <v-card-text>
      <v-timeline dense>
        <div v-for="(item, index) in question.answer" :key="index">
        <v-layout row wrap spacer align-center>
          <v-flex xs2 sm2 md2>
            <v-avatar>
              <img :src=item.respondent.url>
            </v-avatar>
          </v-flex>
          <v-flex xs1 sm1 md1>
          </v-flex>
          <v-flex xs2 sm2 md2>
            <span><strong>{{ item.respondent.username }}</strong></span>
          </v-flex>
          <v-spacer></v-spacer>
          	<v-flex xs4 sm4 md4>
					<v-layout>
          <v-flex xs12 sm12 md12>{{ item.date }}</v-flex>
          <v-flex xs12 sm12 md12>
            <v-icon color="yellow darken-2">
              star
            </v-icon>
            <span>2</span>
          </v-flex>
        </v-layout>
				</v-flex>
        </v-layout>
        <v-layout roe wrap>
          <v-flex xs1 sm1 md1></v-flex>
          <v-flex xs11 sm11 md11>
            <v-alert :value="true" outline color="green">
              {{ item.content }}
            </v-alert>
          </v-flex>
        </v-layout>
        </div>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    async asyncData({params}) {
		const url = "http://127.0.0.1:3000/api/questions/"
		let { data } = await axios.get(`${url}${params.id}`)
		return { question: data }
	}
  }

</script>
