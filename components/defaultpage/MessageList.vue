<template>
  <v-menu offset-y>
    <v-btn 
      slot="activator" flat class="hidden-sm-and-down">
      <v-badge color="pink" overlap>
        <v-icon>message</v-icon>
        <span slot="badge">{{ items.length }}</span>
      </v-badge>
    </v-btn>
    <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="index"
              avatar
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.name }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ item.sub }}
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
    name: 'messagelist',
    data() {
      return {
        show: true,
        items: [
        {
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
