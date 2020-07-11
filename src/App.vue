<template>
  <v-app>
    <v-app-bar
      id="home"
      app
      :color="color"
      elevate-on-scroll
      dark
    >
      <v-btn text color="white" @click="$vuetify.goTo('#home')">The Sanctuary Collection</v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="white" @click="$vuetify.goTo('#header-project')">Project</v-btn>
      <v-btn text color="white" @click="$vuetify.goTo('#header-unittypes')">Unit Types</v-btn>
      <v-btn text color="white" @click="$vuetify.goTo('#header-pricelist')">Price list</v-btn>
      <v-btn text color="white" @click="$vuetify.goTo('#header-contact')">Contact</v-btn>
    </v-app-bar>

      <v-main class="pa-0" v-scroll="onScroll">
        <Main/>
      </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main
  },
  data: () => ({
    offsetTop: 0
  }),
  computed: {
    color: function() {
      if (this.offsetTop === 0) return 'transparent'
      else return '#4B55BE'
    }
  },
  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollingElement.scrollTop
    },
    scrollTo (target) {
      console.log(target)
      console.log(window)
    }
  }
};
</script>
