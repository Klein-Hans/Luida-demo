<template>
  <v-app>

    <v-toolbar
      fixed
      color="white"
      v-show="$store.getters.isAuthenticated !== null"
    >
      <v-spacer></v-spacer>
			<v-toolbar-items class="toolbar-imtes">
				<v-btn icon to="/search" nuxt class="hidden-xs-only">
					<v-icon class="icon">search</v-icon>
        </v-btn>
        <messagelist />
        <invitationList />
        <plusmenu />
        <profileInNavbar />
				<v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-sm-and-up">
					<v-icon class="icon">menu</v-icon>
				</v-btn>
			</v-toolbar-items>
    </v-toolbar>
    <v-content>
        <nuxt />
    </v-content>
    <v-navigation-drawer
      right
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list >
        <v-list-tile avatar :to="'/users/' + $store.state.authUser" nuxt>
          <v-list-tile-avatar>
            <img :src=$store.state.authUrl>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ $store.state.authName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/search" nuxt>
          <v-list-tile-action>
            <v-icon light>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Search</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>message</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Message</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/questions" nuxt>
          <v-list-tile-action>
            <v-icon light>timeline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Timeline</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="'/invitations/' + $store.state.authUser" nuxt>
          <v-list-tile-action>
            <v-icon light>notifications</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Notification</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Setting</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Help</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import messagelist from '~/components/defaultpage/MessageList.vue'
  import invitationList from '~/components/defaultpage/InvitationList.vue'
  import profileInNavbar from '~/components/defaultpage/Profile.vue'
  import plusmenu from '~/components/defaultpage/Plusmenu.vue'
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    components: {
      messagelist,
      invitationList,
      profileInNavbar,
      plusmenu
    }
  }
</script>

<style>
.page{
  margin-top: 90px;
}
.title{
  font-family: 'Ubuntu', sans-serif;
}
</style>

