<template>
  <v-container class="page">
    <questionList />
  </v-container>
</template>

<script>
import questionList from '~/components/question/questionList.vue'
import axios from 'axios'
  export default {
    data() {
      return {
      }
		},
		components: {
			questionList
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
