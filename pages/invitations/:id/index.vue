<template>
  <div class="page">
    <v-layout row wrap>
    <v-alert :value="true" color="info" icon="info" outline class="title" v-show="invitations.length === 0">
        There is no invitation yet.
    </v-alert>
      <v-flex xs12 sm6 md4 v-for="(invitation, index) in invitations" :key="index">
        <v-card class="card">
          <v-layout row wrap>
            <v-flex xs6 sm6 md6>
              <v-img :src=invitation.project.url aspect-ratio="1.0" class="image"></v-img>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <v-card-title primary-title>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-content class="display-2">
                            {{ invitation.project.name }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content class="title">
                            {{ invitation.project.disc }}
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-text>
              <div class="text-xs-center">
              <v-chip outline color="indigo darken-1" v-for="(tag, i) in invitation.project.tags" :key="i" class="title">{{ invitation.project.tags[i] }}</v-chip>
            </div>
          </v-card-text>
          <v-card-actions>
              <v-container>
              <v-layout row wrap>
                  <v-flex xs6 sm6 md6>
                      <v-btn color="blue darken-4" dark @click="acceptInvitation(index)">Accept
                <v-icon dark right>check_circle</v-icon>
              </v-btn>
                  </v-flex>
                  <v-flex xs6 sm6 md6>
                      <v-btn color="red" dark @click="denyInvitation(index)">Decline
                <v-icon dark right>block</v-icon>
              </v-btn>
                  </v-flex>
              </v-layout>
              </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {

      }
    },
    methods: {
        async acceptInvitation(index){
            try{
                await axios.put(`http://127.0.0.1:3000/api/users/projects/${this.$store.state.authUser}`, {
                project: this.invitations[index].project
            })
            await axios.delete(`http://127.0.0.1:3000/api/invitations/${this.invitations[index]._id}`)
            }
            catch(err){
                console.log(err.message)
            }
            this.invitations.splice(index, 1) 
        },
        async denyInvitation(index){
            try{
                await axios.delete(`http://127.0.0.1:3000/api/invitations/${this.invitations[index]._id}`)
            }
            catch(err){
                console.log(err.message)
            }
            this.invitations.splice(index, 1)
        }
    },
    async asyncData({
      params
    }) {
      let {
        data
      } = await axios.get(`http://127.0.0.1:3000/api/invitations/${params.id}`)
      return {
        invitations: data
      }
    }
  }

</script>

<style scoped>
  .image {
    margin: 10%;

  }

  .card {
    margin: 10px;
  }

</style>
