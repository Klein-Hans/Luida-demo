<template>
<div class="page">
    <v-container  class="login-form">
  <form class="form">
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Password"
      required
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

  export default {
    data: () => ({
      password: '',
      email: ''
    }),
    methods: {
      signIn(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('WelcomeBack', user)
          var user = firebase.auth().currentUser
          this.$store.commit('setUserId', user.uid)
        })
        .catch(error => {
          alert(error)
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
