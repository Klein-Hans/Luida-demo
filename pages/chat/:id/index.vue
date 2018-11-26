<template>
  <div class="chat-page">
    <v-layout row wrap>
      <v-flex sm2 md2 hidden-xs-only>
        <v-card class="project-list">
          <v-list>
            <v-list-tile v-for="(item, index) in user.projects" :key="index" @click="subscribe(index)">
              <v-list-tile-avatar>
                <img :src="item.url">
              </v-list-tile-avatar>
              <v-list-tile-action>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 sm7 md7>
        <v-navigation-drawer
          v-model="rightDrawer"
          temporary
          fixed
        >
        <v-list>
          <v-list-tile v-for="(item, index) in user.projects" :key="index" @click="subscribe(index)">
            <v-list-tile-avatar>
              <img :src="item.url">
            </v-list-tile-avatar>
            <v-list-tile-action>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        </v-navigation-drawer>
        <v-card color="blue-grey darken-4" class="chat-list">
          <div class="char-range">
            <div v-for="(message, index) in messages" :key="index">
              <div v-show="message.userid != $store.state.authUser" class="left-chat chat">
                <v-layout row spacer>
                  <v-avatar size="36px" class="avator">
                    <img :src="message.url">
                  </v-avatar>
                  <div class="message">{{ message.body }}</div>
                </v-layout>
                <div class="date">{{ message.date }}</div>
              </div>
              <div class="clear"></div>
              <div v-show="message.userid == $store.state.authUser" class="right-chat chat">
                <v-layout row spacer>
                  <div class="message">{{ message.body }}</div>
                  <v-avatar size="36px" class="avator">
                    <img :src="message.url">
                  </v-avatar>
                </v-layout>
                <div class="date">{{ message.date }}</div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
          <v-text-field v-model="message" type="text" class="input-field" append-outer-icon="send" dark color="white"
            @keyup.enter="sendMessage" @click:append-outer="sendMessage"></v-text-field>
            <v-flex hidden-sm-and-up>
              <v-btn absolute left top dark fab icon small color="pink" @click.stop="rightDrawer = !rightDrawer">
            <v-icon>group</v-icon>
          </v-btn>
            </v-flex>
        </v-card>
      </v-flex>
      <v-flex sm3 md3 hidden-xs-only>
        <v-card class="group-info">
          <v-card-title class="title">Project Info</v-card-title>
          <v-card>
            <img :src=project.url>
            <v-card-title class="display-1">{{ project.name }}</v-card-title>
            <v-card-text class="title">{{ project.disc }}</v-card-text>
            <v-card-actions>
              <div class="text-xs-center">
                <v-chip color="indigo darken-1 title" text-color="white" v-for="(tag, i) in project.tags" :key="i">{{
                  project.tags[i] }}</v-chip>
              </div>
            </v-card-actions>
          </v-card>
          <v-card>
            <v-layout row wrap>
              <v-flex sm3 md3 v-for="(user, index) in project.users" :key="index">
                <v-avatar size="36px" class="avator" :to="'/users/'+user._id" nuxt>
                  <img :src=user.url>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import io from 'socket.io-client'
  import axios from 'axios'
  export default {
    async asyncData({
      params
    }) {
      let {
        data
      } = await axios.get(`/api/users/${params.id}`)
      return {
        user: data
      }
    },
    mounted() {
      this.socket = io()
      this.socket.on('conversation private post', data => {
        this.messages.push(data || {})
      })
    },
    methods: {
      async subscribe(index) {
        this.room = this.user.projects[index]._id
        this.socket.emit('subscribe', this.room)
        var {data} = await axios.get(`/api/projects/${this.user.projects[index]._id}`)
        this.project = data
        try{
          var {data} = await axios.get(`/api/chat/${this.user.projects[index]._id}`)
          this.messages = data.messages
        }
        catch(err){
          console.log(err)
        }
        
      },
      async sendMessage() {
        try{
          if (!this.message.trim()) {
            return
          }
          var message = {
            body: this.message.trim(),
            date: Date.now(),
            room: this.room,
            username: this.$store.state.authName,
            userid: this.$store.state.authUser,
            url: this.$store.state.authUrl
          }
          await axios.put(`/api/chat/${this.project._id}`, {
            message: message
          })
          this.messages.push(message)
          this.socket.emit('send message', message)
          this.message = ''
        }
        catch(err){
          console.log(err)
        }
      }
    },
    data() {
      return {
        project: '',
        drawing: false,
        messages: [],
        message: '',
        room: '',
        socket: '',
        rightDrawer: false
      }
    }
  }

</script>

<style scoped>
  .input-field {
    position: absolute;
    bottom: 15%;
    left: 10%;
    right: 10%;
  }

  .project-list {
    height: 100vh;

  }

  .chat-list {
    height: 100vh;
  }

  .group-info {
    height: 100vh;
  }

  .avator {
    margin: 10px;
  }

  .message {
    background-color: #F5F5F5;
    border-radius: 18px;
    text-align: left;
    font-size: 18px;
    padding: 8px;
    min-width: 60px;
  }

  .date {
    color: white;
  }

  .right-chat {
    float: right;
  }

  .left-chat {
    float: left;
  }

  .clear {
    clear: both;
  }

  .chat {
    margin: 10px;
  }

  .char-range {
    height: 85vh;
    overflow: scroll;
  }
  .chat-page{
    margin-top: 60px;
  }

</style>
