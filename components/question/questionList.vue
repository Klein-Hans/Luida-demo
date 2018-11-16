<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-title>
      <v-layout row wrap spacer align-center>
        <v-flex xs2 sm2 md2>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
        </v-flex>
        <v-flex xs1 sm1 md1>
        </v-flex>
        <v-flex xs1 sm1 md1>
          <span><strong>Username</strong></span>
        </v-flex>
        <v-spacer></v-spacer>
				<v-flex xs4 sm4 md4>
					<v-layout>
          <v-flex xs12 sm12 md12>Date</v-flex>
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
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
        principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </v-alert>
      <div class="text-xs-center">
        <v-chip color="indigo darken-1" text-color="white" v-for="(tag, i) in tags" :key="i">{{ tags[i] }}</v-chip>
      </div>

    </v-card-title>
    <v-card-text>
      <v-timeline dense>
        <v-layout row wrap spacer align-center>
          <v-flex xs2 sm2 md2>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
          </v-flex>
          <v-flex xs1 sm1 md1>
          </v-flex>
          <v-flex xs2 sm2 md2>
            <span><strong>Username</strong></span>
          </v-flex>
          <v-spacer></v-spacer>
          	<v-flex xs4 sm4 md4>
					<v-layout>
          <v-flex xs12 sm12 md12>Date</v-flex>
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
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
              convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
              salutandi
              sententiae.
            </v-alert>
          </v-flex>
        </v-layout>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        tags: ['python', 'ruby']
      }
    }
  }

</script>
