<template>
<div class="page">
    <v-container  class="login-form">
        <v-btn block color="#3b5998" dark class="login-btn font-weight-regular form">
            <img src="~/static/facebook.png" class="icon">
            Facebookで続行</v-btn>
        <v-btn block color="white" light class="login-btn font-weight-regular form">
            <img src="~/static/google.png" class="icon">
            Googleで続行</v-btn>
        <v-divider class="form"></v-divider>
  
        <v-btn block color="red lighten-1" dark class="login-btn form" @click="submit">
            <v-icon class="icon">mail</v-icon>
                メールアドレスで登録</v-btn>
        <v-divider class="form"></v-divider>
        <v-layout row wrap>
        <div class="note">
        Rikahubアカウントをお持ちですか？
        </div>
        <v-spacer></v-spacer>
        <v-btn outline color="red lighten-1">ログイン</v-btn>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
  export default {

    data: () => ({
      
    }),

    
    methods: {
      submit () {
        this.$v.$touch()
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
