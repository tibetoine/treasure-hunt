<template>
  <v-card 
    color="#444"
    dark>
    <img src="@/assets/lettre.jpg" alt="lettre" class="lettre" ref="lettre" id="lettreId"></img>
    
  </v-card>
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
      }
      this.$router.push(link)
    },
    getImage(item) {
      return require('../assets/' + item.image)
    }
  }
}
</script>
<style scoped>

.lettre {
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding:10px;
  }
</style>