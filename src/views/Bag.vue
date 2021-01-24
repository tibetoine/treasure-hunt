<template>
  <v-container>
    <v-row v-if="items.length > 0">
      <v-col v-for="item in items" :key="item.id" cols="4">
        <v-card>
          <v-img
            class="itemimg"
            @click="goTo(item.link)"
            :src="getImage(item)"
          ></v-img>
          <v-card-title>{{ item.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-else border="bottom" colored-border type="warning" elevation="2">
      Vous n'avez trouvé aucun objet pour l'instant
    </v-alert>
    <v-btn @click="goTo('/')" color="primary" class="ma-2 white--text">
      <v-icon left dark>
        mdi-arrow-left
      </v-icon>
      Revenir à la carte
    </v-btn>
    <pirate-ok ref="ok"></pirate-ok>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import PirateOk from '../components/PirateOk.vue'
export default {
  components: { PirateOk },
  name: 'Bag',

  data: () => ({}),
  computed: mapState({
    // arrow functions can make the code very succinct!
    items: (state) => state.items
  }),
  methods: {
    goTo(link) {
      if (link === '404') {
        this.$refs.ok.open(
          'Loupe',
          "Demande à tes parents de t'offrir une loupe !",
          { color: 'orange darken-4', image: 'mdi-gift' }
        )
      } else if (link === 'mapitem') {
        this.$refs.ok.open(
          'Table',
          "Ce serait pratique d'avoir une table pour étudier cette carte",
          { color: 'orange darken-4', image: 'mdi-desk' }
        )
      } else {
        this.$router.push(link)
      }
    },
    getImage(item) {
      return require('../assets/' + item.image)
    }
  }
}
</script>
<style scoped>
.itemimg {
  cursor: pointer;
}
</style>
