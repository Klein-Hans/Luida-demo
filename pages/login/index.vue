<template>
<div class="page">
    <v-container  class="login-form">
  <form class="form">
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      required
      :append-icon="show1 ? 'visibility_off' : 'visibility'"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      @click:append="show1 = !show1"
    ></v-text-field>
    <div class="note">パスワードをお忘れですか？</div>
    
    <v-btn block color="red lighten-1" dark class="login-btn" @click="signIn">
            ログイン</v-btn>
    <v-layout row wrap>
        <div class="note">
        アカウントをお持ちではないですか？
        </div>
        <v-spacer></v-spacer>
        <v-btn to="/signup" nuxt outline color="red lighten-1">登録</v-btn>
    </v-layout>
  </form>
  </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase'
import axios from '~/plugins/axios'

  export default {
    data: () => ({
      password: '',
      email: '',
      show1: false
    }),
    methods: {
      signIn(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then( async () => {
          var user = await firebase.auth().currentUser.uid
          var id = user.toString()
          var { data } = await axios.get(`/api/users/${id}`)
          this.$store.commit('setUserId', id)
          this.$store.commit('setTags', data.tags)
          this.$store.commit('setUrl', data.url)
          this.$store.commit('setName', data.username)
          this.$store.commit('setProject', data.projects)
          var { data } = await axios.get(`/api/invitations/${id}`)
          this.$store.commit('setInvitation', data)
          this.$router.push(`/users/${this.$store.state.authUser}`)
        })
        .catch(error => {
          alert(error.message)
        })
      },
      clear () {
        this.name = ''
        this.email = ''
      }
    }
  }
</script>

<style scoped>
.login-form{
    max-width: 600px;
    text-align: center;
    margin-top: 90px;
}
.login-btn{
    position: relative;
    height: 60px;
}
.icon{
    position: absolute;
    left: 0;
    height: 20px;
    z-index: initial;
}
.form{
    margin-top: 30px;
}
.note{
    margin-top: 20px;
}
</style>
