<template>
  <v-layout>
    <v-btn icon @click.stop="drawing = !drawing" class="hidden-sm-and-up">
      <v-icon class="icon">menu</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile v-for="(message, i) in messages" :key="i">
        <v-list-tile-title>{{ message }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-navigation-drawer v-model="drawing" temporary absolute width="300">
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
    <v-text-field
    v-model="message" type="text" @keyup.enter="sendMessage" class="input-field" append-outer-icon="send" color="indigo" @click:append-outer="sendMessage"
    ></v-text-field>
  </v-layout>
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
      } = await axios.get(`/api/users/ZI1fdJOlk5VgKgeATWqalu8Uegu2`)
      return {
        user: data
      }
    },
    data() {
      return {
					drawing: false,
					messages: [],
					message: '',
					room: '',
					socket: ''
      }
		},
		mounted() {
			this.socket = io()
			this.socket.on('conversation private post', data => {
				this.messages.push(data.message || {})
			})
		},
    methods: {
        subscribe(index){
					this.room = this.user.projects[index]._id
					this.socket.emit('subscribe', this.room)
				},
				sendMessage(){
					if(!this.message.trim()){
						return
					}
					this.messages.push(this.message)
					this.socket.emit('send message', {
						// user: this.$store.state.authUser,
						message: this.message.trim(),
            date: Date.now(),
            room: this.room
					})
					this.message = ''
				}
    }
  }

</script>

<style scoped>
.input-field{
	position: absolute;
	bottom: 0;
	left: 10%;
	right: 10%;
}

</style>
