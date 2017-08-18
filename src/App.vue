<template>
  <v-app>

    <!-- Hamburger Navigation Bar for smaller devices -->
    <v-navigation-drawer temporary v-model="sideNav">

      <v-list>

        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">

          <v-list-tile-action>

            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>{{item.title}}</v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <!-- Navigation Bar -->
    <v-toolbar dark class="primary">

      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"> </v-toolbar-side-icon>

      <v-toolbar-title>

        <router-link to="/" tag="span" style="cursor: pointer">Meetup</router-link>

      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-item class="hidden-xs-only">

        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">

          <v-icon left>{{item.icon}}</v-icon>

          {{item.title}}
        </v-btn>

      </v-toolbar-item>

    </v-toolbar>

    <!-- Page Content -->
    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
        if (this.userIsAutehticated) {
          menuItems = [
            { icon: 'group', title: 'View Meetups', link: '/meetups' },
            { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
            { icon: 'person', title: 'Profile', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAutehticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
