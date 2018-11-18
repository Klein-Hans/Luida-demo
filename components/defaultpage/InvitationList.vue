<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat class="hidden-xs-and-down">
      <v-badge color="pink" overlap>
        <v-icon>notifications</v-icon>
        <span slot="badge">{{ items.length }}</span>
      </v-badge>
    </v-btn>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile :key="index">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ item.sub }}
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
        <v-divider :key="index" v-show="index < items.length - 1"></v-divider>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'invitationList',
    data() {
      return {
        show: true,
        items: [{
            name: 'Tony',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            sub: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            name: 'Tony',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            sub: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            name: 'Tony',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            sub: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          }
        ]
      }
    }
  }

</script>
