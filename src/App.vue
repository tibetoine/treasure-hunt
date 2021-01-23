<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon large>mdi-map-legend</v-icon>
      <v-toolbar-title>Chasse au trésor</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="bag">
        <v-badge color="green" content="6">
          <v-icon large>mdi-bag-personal-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-icon
          v-if="!light"
          @click.stop="turnlight(!light)"
          large
          color="black"
          >mdi-lightbulb-off</v-icon
        >
        <v-icon
          v-if="light"
          @click.stop="turnlight(!light)"
          large
          color="orange"
          >mdi-lightbulb-on</v-icon
        >
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({ drawer: null }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    light: (state) => state.light
  }),
  methods: {
    ...mapMutations(['turnlight'])
  }
}
</script>
