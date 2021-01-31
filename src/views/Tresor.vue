<template>
  <v-card color="#ccc" > 
    <img src="@/assets/tresor.jpg" alt="tresor" class="tresor" ref="tresor" id="tresorId"></img>
    <v-card-title class="justify-center" text-color="primary">Bravo {{ name }}! Tu as trouvé le trésor !</v-card-title>
    <v-card-subtitle class="text-center">Demande à tes parents de te donner le trésor</v-card-subtitle>
    
  </v-card>

</template>

<script>
import { mapState } from 'vuex'
import PirateOk from '../components/PirateOk.vue'
export default {
  components: { PirateOk },
  name: 'Bag',

  data: () => ({
    htmltable: '',
    next: 0
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    items: (state) => state.items,
    name: (state) => state.name
  }),
  mounted() {
  },
  methods: {
    
  }
}
</script>
<style scoped>
.tresor {
  height: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
</style>
