<template>
  <v-app>

    <v-toolbar
      fixed
      color="white"
    >
      <v-spacer></v-spacer>
			<v-toolbar-items class="toolbar-imtes">
				<v-btn icon to="/search" nuxt>
					<v-icon class="icon">search</v-icon>
        </v-btn>
        <messagelist />
        <v-btn icon to="/" nuxt>
          <v-icon class="icon">home</v-icon>
				</v-btn>
				<v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-md-and-up">
					<v-icon class="icon">menu</v-icon>
				</v-btn>
			</v-toolbar-items>
    </v-toolbar>
    <v-content>
        <nuxt />
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import messagelist from '~/components/defaultpage/MessageList.vue'
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
      messagelist
    }
  }
</script>

<style>
.page{
  margin-top: 50px;
}
.wf-notosansjapanese { font-family: "Noto Sans JP"; }
</style>

