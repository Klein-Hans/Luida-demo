<template>
  <div class="page">
    <v-container class="login-form">
      <form class="form">
        <v-text-field v-model="title" label="Tititle" required></v-text-field>
        <v-textarea name="input-7-1" box label="Question" auto-grow required 
        background-color="transparent"
        v-model="question"></v-textarea>
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

        <v-btn block color="red lighten-1" class="login-btn white--text" @click="submit" :disabled="!title || !question || !tags" depressed>
          Submit</v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios';

  export default {
    data: () => ({
      title: '',
      question: '',
      tags: [],
      another: ''
    }),
    methods: {
      async submit() {
        try{
            let {data} = await axios.post("http://127.0.0.1:3000/api/questions", {
                poster: this.$store.state.authUser,
                date: Date.now(),
                title: this.title,
                content: this.question,
                tags: this.tags
            })
            await axios.put(`http://127.0.0.1:3000/api/users/questions/${this.$store.state.authUser}`,{
            question: data._id
          })
          this.$router.push(`/users/${this.$store.state.authUser}`)
        }
        catch(err){
            console.log('project', err.message)
        }
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
