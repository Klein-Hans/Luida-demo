<template>
  <div class="page">
    <v-container class="login-form">
      <form class="form">
        <v-card class="mx-auto" max-width="500">
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field label="Email" v-model="email"></v-text-field>
                <span class="caption grey--text text--darken-1">
                  This is the email you will use to login to your Rikahub account
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                <v-text-field label="Confirm Password" type="password" v-model="confirmpassword"></v-text-field>
                <span class="caption grey--text text--darken-1">
                  Please enter a password for your account
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <v-card-text>
                <v-text-field label="Username" required prepend-icon="person" v-model="username"></v-text-field>
                <v-select :items="gradeSelect" v-model="grade" menu-props="auto" label="学年" hide-detailes prepend-icon="school"
                  single-line></v-select>
                <v-select :items=campusSelect v-model="campus" menu-props="auto" label="キャンパス" hide-detailes
                  prepend-icon="location_on"></v-select>
                <v-layout row wrap>
                  <v-flex xs10 sm10 md10>
                    <v-text-field label="Add Tag by putting Enter or push the button" @keyup.enter="addLabel" v-model="another"
                      prepend-icon="tag">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <v-btn fab small dark color="red lighten-1" @click="addLabel">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-chip close outline color="secondary" v-for="(tag, i) in tags" :key="i" @input="deleteTag(i)">{{
                  tags[i] }}</v-chip>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="4">
              <div class="pa-3 text-xs-center">
                <v-img class="mb-3" contain height="128" src="http://www.tus.ac.jp/news/character/character/img/bocchan_illust.gif"></v-img>
                <h3 class="title font-weight-light mb-2">Welcome to Rikahub</h3>
                <span class="caption grey--text">Thanks for signing up!</span>
              </div>
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn v-show="step < 4" :disabled="step === 1" flat @click="step--">
              Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-show="step < 3" color="primary" depressed @click="step++">
              Next
            </v-btn>
            <v-btn outline :disabled="!username || !email || !password || !grade || !campus || !tags || password !== confirmpassword" v-show="step === 3" color="red lighten-1" depressed @click="signUp">
              Register
            </v-btn>
            <v-container>
            <v-btn v-show="step === 4" to="/search" nuxt color="red lighten-1" dark>Search your baddy</v-btn>
            </v-container>
          </v-card-actions>
        </v-card>
        <div v-show="step === 1">
        <div class="note">
          アカウントをすでにお持ちですか？
        </div>
        <v-btn to="/login" nuxt outline color="red lighten-1">ログイン</v-btn>
        </div>
      </form>
    </v-container>
  </div>
</template>

<script>
  import {
    auth
  } from '~/plugins/firebase'
  import firebase from 'firebase'
  import axios from '~/plugins/axios'

  export default {
    name: 'home',
    data: () => ({
      password: '',
      confirmpassword: '',
      email: '',
      id: '',
      username: '',
      campus: '',
      grade: '',
      tags: [],
      step: 1,
      another: '',
      gradeSelect: ['D2', 'D1', 'M2', 'M1', 'B4', 'B3', 'B2', 'B1'],
      campusSelect: ['神楽坂', '野田', '葛飾', '長万部']
    }),
    methods: {
      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then( async () => {
            var { data } = await axios.get("/api/icons/circle")
            var user = await firebase.auth().currentUser.uid
            var id = user.toString()
            var userinfo = await axios.post("/api/users/", {
              id: id, 
              username: this.username,
              disc: "Hello! My name is " + this.username,
              url: data.url,
              campus: this.campus,
              grade: this.grade,
              tags: this.tags
            })
            this.$store.commit('setUserId', id)
            this.$store.commit('setTags', this.tags)
            this.$store.commit('setName', this.username),
            this.$store.commit('setUrl', data.url)
            this.step++
          })
          .catch(error => {
            alert(error.message)
          })
      },
      addLabel() {
        if (this.another) {
          this.tags.push(this.another)
          this.another = ''
        }
      },
      deleteTag(index) {
        this.tags.splice(index, 1)
      }

    },

    computed: {
      currentTitle() {
        switch (this.step) {
          case 1:
            return 'Sign-up'
          case 2:
            return 'Create a password'
          case 3:
            return 'Student information'
          default:
            return 'Account created'
        }
      }
    }
  }

</script>

<style scoped>
  .login-form {
    max-width: 600px;
    text-align: center;
    margin-top: 90px;
  }

  .login-btn {
    position: relative;
    height: 60px;
  }

  .icon {
    position: absolute;
    left: 0;
    height: 20px;
    z-index: initial;
  }

  .form {
    margin-top: 30px;
  }

  .note {
    margin-top: 20px;
  }

</style>
