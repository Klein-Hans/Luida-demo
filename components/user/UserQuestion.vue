<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6 sm6 md4 v-for="(question, index) in questions" :key="index">
        <v-card :to="'/questions/'+question._id" nuxt class="card">
          <v-card-title primary-title>
            <div>
              <h3 class="headline">{{ question.title }}</h3>
              <div class="text-xs-center">{{ question.disc }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <div class="text-xs-center">
              <v-chip outline color="indigo darken-1" v-for="(tag, i) in question.tags" :key="i">{{ question.tags[i] }}</v-chip>
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
