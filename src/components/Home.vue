<template>
  <v-container>

    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs21>
        <v-carousel style="cursor: pointer">
          <v-carousel-item v-for="meetups in meetups" :src="meetups.imageUrl" :key="meetups.id" @click="onLoadMeetup(meetups.id)">
            <div class="title">
              {{meetups.title}}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }

</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>

