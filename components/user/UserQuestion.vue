<template>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(question, index) in questions" :key="index">
        <v-card :to="'/questions/'+question._id" nuxt class="card">
          <v-card-title primary-title>
            <div>
              <h3 class="title">{{ question.title }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="text-xs-center">
              <v-chip color="indigo darken-1" v-for="(tag, i) in question.tags" :key="i" class="title" text-color="white">{{ question.tags[i] }}</v-chip>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: 'userquestion',
    props: ["questions"],
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  .card {
    margin: 10px;
  }

</style>
