<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat class="hidden-xs-only">
      <v-badge color="pink" overlap>
        <v-icon>notifications</v-icon>
        <span slot="badge">{{ $store.state.authInvitation.length }}</span>
      </v-badge>
    </v-btn>
    <v-list two-line>
      <template v-for="(invitation, index) in $store.state.authInvitation">
        <v-list-tile :key="index" avatar :to="'/invitations/'+ $store.state.authUser">
          <v-list-tile-avatar>
            <img :src="invitation.project.url">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ invitation.project.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ invitation.project.disc }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider :key="index" v-show="index < $store.state.authInvitation.length - 1"></v-divider>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
import axios from '~/plugins/axios'
  export default {
    name: 'invitationList',
    data() {
      return {
        show: true
      }
    }
  }

</script>
