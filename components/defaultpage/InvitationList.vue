<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat class="hidden-sm-and-down">
      <v-badge color="pink" overlap>
        <v-icon>notifications</v-icon>
        <span slot="badge">{{ $store.state.authInvitation.length }}</span>
      </v-badge>
    </v-btn>
    <v-list two-line>
      <template v-for="(invitation, index) in $store.state.authInvitation">
        <v-list-tile :key="index">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ invitation.project.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ invitation.project.disc }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>
              <v-btn small color="blue darken-4" dark>Accept
        <v-icon small dark right>check_circle</v-icon>
      </v-btn>

      <v-btn small color="red" dark>Decline
        <v-icon small dark right>block</v-icon>
      </v-btn>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider :key="index" v-show="index < invitations.length - 1"></v-divider>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'invitationList',
    data() {
      return {
        show: true
      }
    },
    props:["invitations"]
  }

</script>
