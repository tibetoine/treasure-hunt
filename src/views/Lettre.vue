<template>
  <v-card color="#444" dark class="test">
    <div id="lettreid" ref="mylettre" :style="getStyle()">
      <div id="secrettext">
        <p style="font-family: cursive; color:black;">
          Le code secret est le résultat de :
        </p>
        <p style="color:black;">{{ op1 }} + {{ op2 }}</p>
      </div>
    </div>
    <v-btn @click="goTo('/bag')" color="primary" class="ma-2 white--text">
      <v-icon left dark>
        mdi-arrow-left
      </v-icon>
      Revenir au sac
    </v-btn>
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
    items: (state) => state.items,
    op1: (state) => state.enigma.op1,
    op2: (state) => state.enigma.op2
  }),
  methods: {
    goTo(link) {
      if (link === '404') {
      }
      this.$router.push(link)
    },
    getImage(item) {
      return require('../assets/' + item.image)
    },
    getLettre() {
      let re = require('../assets/lettre.jpg')
      return re
    },
    getStyle() {
      let style =
        'background-image:url(' +
        this.getLettre() +
        ');background-repeat:no-repeat;background-size:contain;background-position:center;'
      return style
    }
  }
}
</script>
<style scoped>
.lettre {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
#lettreid {
  position: relative;
  height: 80vh;
}

#secrettext {
  position: absolute;
  left: 55%;
  top: 20%;
  width: 20%;
  height: 100px;
}
</style>
