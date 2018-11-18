<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(question, index) in questions" :key="index">
        <v-card :to="'/questions/'+question._id" nuxt class="card overflow-x-hidden" height="200">
          <v-card-title primary-title class="overflow-y-hidden">
            <div>
              <h3 class="headline">{{ question.title }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="text-xs-center">
              <v-chip outline color="indigo darken-1" v-for="(tag, i) in question.tags" :key="i" class="title">{{ question.tags[i] }}</v-chip>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
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
