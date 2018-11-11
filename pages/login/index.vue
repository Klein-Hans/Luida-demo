<template>
<div class="page">
    <v-container  class="login-form">
        <v-btn block color="#3b5998" dark class="login-btn font-weight-regular form">
            <img src="~/static/facebook.png" class="icon">
            Facebookでログイン</v-btn>
        <v-btn block color="white" light class="login-btn font-weight-regular form">
            <img src="~/static/google.png" class="icon">
            Googleでログイン</v-btn>
        <v-divider class="form"></v-divider>
  <form class="form">
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Password"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-layout row wrap>
        <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="ログイン情報を保存"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
    <div class="note">パスワードをお忘れですか？</div>
    
    </v-layout>
    <v-btn block color="red lighten-1" dark class="login-btn" @click="submit">
            ログイン</v-btn>
    <v-layout row wrap>
        <div class="note">
        アカウントをお持ちではないですか？
        </div>
        <v-spacer></v-spacer>
        <v-btn outline color="red lighten-1">登録</v-btn>
    </v-layout>
  </form>
  </v-container>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      name: '',
      email: '',
      checkbox: false
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
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
