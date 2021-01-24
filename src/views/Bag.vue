<template>
  <v-container>
    <v-row v-if="items.length > 0">
      <v-col v-for="item in items" :key="item.id" cols="4">
        <v-card height="200">
          <v-img :src="'@/assets/' + item.image" :alt="item.name"></v-img>
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
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Bag',

  data: () => ({}),
  computed: mapState({
    // arrow functions can make the code very succinct!
    items: (state) => state.items
  }),
  methods: {
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>
