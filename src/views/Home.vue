<template>
  <v-card 
    color="#444"
    dark>
    <img v-if="light" src="@/assets/chambre-dark.jpg" @click.prevent="nolight" alt="chambre-dark" class="chambre" ref="chambre-dark" id="chambreDarkId"></img>
    <div v-if="!light">
      <img  src="@/assets/chambre.jpg" alt="chambre"  usemap="#image-map" class="chambre" ref="chambre" id="chambreId"></img>
      
      <map name="image-map" ref="mymap">
        <area
          target="_self"
          alt="paint-skull"
          title="paint-skull"
          href="paint-skull"
          coords="1611,1189,1013,586"
          shape="rect"
        />
        <area
          target="_self"
          alt="clock"
          title="clock"
          href="clock"
          coords="589,798,349"
          shape="circle"
        />
        <area
          target="_self"
          alt="bed"
          title="bed"
          href="bed"
          coords="3764,1614,3666,1746,3718,1959,3982,2389,6026,2395,6101,1970,6107,1591,5923,1499,5802,1424,5883,1355,5515,1373,5538,1430,5314,1551,5142,1556,5090,1740,4263,1614"
          shape="poly"
        />
        <area
          target="_self"
          alt="paint-pirate"
          title="paint-pirate"
          href="paint-pirate"
          coords="4172,827,4723,1396"
          shape="rect"
        />
        <area
          target="_self"
          alt="map"
          title="map"
          href="map"
          coords="3408,683,3396,1292,4131,1315,4126,833,4252,798,4281,683"
          shape="poly"
        />
        <area
          target="_self"
          alt="chest"
          title="chest"
          href="chest"
          coords="652,2004,1358,2418"
          shape="rect"
        />
        <area
          target="_self"
          alt="carpet"
          title="carpet"
          href="carpet"
          coords="1186,2596,2684,2498,4344,2579,4252,2648,3994,2699,3569,2705,3092,2631,2702,2694,1972,2665,1697,2654"
          shape="poly"
        />
        <area
          target="_self"
          alt="window"
          title="window"
          href="window"
          coords="2127,632,3127,666,3138,1786,2834,1798,2736,1608,2512,1614,2489,1723,2305,1735,2300,1803,2110,1798"
          shape="poly"
        />
        <area
          target="_self"
          alt="table"
          title="table"
          href="table"
          coords="1990,1855,3339,1844,3293,2039,3000,2062,2983,2361,2013,2372"
          shape="poly"
        />
      </map>
    </div>
    <pirate-confirm ref="confirm"></pirate-confirm>
    <pirate-message ref="message"></pirate-message>
  </v-card>
</template>

<script>
// @ is an alias to /src
import SpecialCanvas from '@/components/SpecialCanvas.vue'
import imageMapResize from '@/assets/imageMapResizer.min.js'
import { mapState } from 'vuex'
import PirateConfirm from '../components/PirateConfirm.vue'
import PirateMessage from '../components/PirateMessage.vue'

export default {
  name: 'Home',
  components: {
    SpecialCanvas,
    PirateConfirm,
    PirateMessage
  },
  data: () => ({
     isMounted: false
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    light: state => state.light
  }),
  watch: {
    light (newLight, oldLight) {
      console.log('newLight', newLight)
      if (newLight === true ){
        // console.log('je resize')
        imageMapResize()
      }
    }
  },
  mounted() {
    // console.log(this.$refs.chambre)
    // console.log(document.querySelector('map'))
    if (this.light === true) {
      imageMapResize()
    }
    this.isMounted = true
  },
  methods: {
    mouseover(e) {
      // console.log(e.target)
      this.$refs.sCanvas.myHover(e.target)
    },
    mouseout() {
      this.$refs.sCanvas.myLeave()
    },
    nolight() {
      // this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})  
      this.$refs.message.open('Lumière', 'On ne voit rien ici !!', { color: 'orange darken-4' })
    }
  }
}
</script>
<style scoped>
  .chambre {
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding:10px;
  }
</style>
