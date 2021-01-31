<template>
  <v-card 
    color="#444"
    dark>
    <img src="@/assets/chambre-dark.jpg" @click.prevent="nolight" alt="chambre-dark" :class="lightDirkClass" ref="chambre-dark" id="chambreDarkId"></img>
    
    <img src="@/assets/chambre.jpg" alt="chambre"  usemap="#image-map" :class="lightDayClass" ref="chambre" id="chambreId"></img>
    
    <map name="image-map" ref="mymap">
      <area
        target="_self"
        alt="paint-skull"
        title="paint-skull"
        @click="nothing"
        style="cursor:pointer;"
        coords="1611,1189,1013,586"
        shape="rect"
      />
      <area
        target="_self"
        alt="clock"
        title="clock"
        @click="nothing"
        style="cursor:pointer;"
        coords="589,798,349"
        shape="circle"
      />
      <area
        target="_self"
        alt="bed"
        title="bed"
        @click="goTo('bed')"
        style="cursor:pointer;"
        coords="3764,1614,3666,1746,3718,1959,3982,2389,6026,2395,6101,1970,6107,1591,5923,1499,5802,1424,5883,1355,5515,1373,5538,1430,5314,1551,5142,1556,5090,1740,4263,1614"
        shape="poly"
      />
      <area
        target="_self"
        alt="paint-pirate"
        title="paint-pirate"
        @click="nothing"
        style="cursor:pointer;"
        coords="4172,827,4723,1396"
        shape="rect"
      />
      <area
        target="_self"
        alt="map"
        title="map"
        @click="getMap()"
        style="cursor:pointer;"
        coords="3408,683,3396,1292,4131,1315,4126,833,4252,798,4281,683"
        shape="poly"
      />
      <area
        target="_self"
        alt="chest"
        title="chest"
        @click="getLoupe()"
        style="cursor:pointer;"
        coords="652,2004,1358,2418"
        shape="rect"
      />
      <area
        target="_self"
        alt="carpet"
        title="carpet"
        @click="getLettre()"
        style="cursor:pointer;"
        coords="1186,2596,2684,2498,4344,2579,4252,2648,3994,2699,3569,2705,3092,2631,2702,2694,1972,2665,1697,2654"
        shape="poly"
      />
      <area
        target="_self"
        alt="window"
        title="window"
        @click="goTo('window')"
        style="cursor:pointer;"
        coords="2127,632,3127,666,3138,1786,2834,1798,2736,1608,2512,1614,2489,1723,2305,1735,2300,1803,2110,1798"
        shape="poly"
      />
      <area
        target="_self"
        alt="table"
        title="table"
        @click="goTo('table')"
        style="cursor:pointer;"
        coords="1990,1855,3339,1844,3293,2039,3000,2062,2983,2361,2013,2372"
        shape="poly"
      />
    </map>
      
    
    <pirate-confirm ref="confirm"></pirate-confirm>
    <pirate-message ref="message"></pirate-message>
    <pirate-ok ref="ok"></pirate-ok>
    <pirate-input ref="input"></pirate-input>
  </v-card>
</template>

<script>
// @ is an alias to /src
import SpecialCanvas from '@/components/SpecialCanvas.vue'
import imageMapResize from '@/assets/imageMapResizer.min.js'
import { mapState, mapMutations, mapGetters } from 'vuex'
import PirateConfirm from '../components/PirateConfirm.vue'
import PirateMessage from '../components/PirateMessage.vue'
import PirateOk from '../components/PirateOk.vue'
import PirateInput from '../components/PirateInput.vue'

export default {
  name: 'Home',
  components: {
    SpecialCanvas,
    PirateConfirm,
    PirateMessage,
    PirateInput,
    PirateOk
  },
  data: () => ({
     isMounted: false
  }),
  computed: {
    light() {
      return this.$store.state.light
    },
    lightDayClass() {
      let classe = 'chambre '
      classe+= this.$store.state.light!==true?'d-none':''
      return classe
    },
    lightDirkClass() {
      let classe = 'chambre '
      classe+= this.$store.state.light===true?'d-none':''
      return classe
    },
    getmap() {
      return this.$store.getters.getmap
    },
    getloupe() {
      return this.$store.getters.getloupe
    },
    getlettre() {
      return this.$store.getters.getlettre
    }
  },  
  watch: {
    light (newLight, oldLight) {      
      if (newLight === true ){
        // console.log('je resize')
        /* Pour être sûr que les éléments sont présents */
        setTimeout(() => {  imageMapResize() }, 500);        
      }
    }
  },
  mounted() {
    // console.log(this.$refs.chambre)
    // console.log(document.querySelector('map'))
    if (this.light === true) {
      imageMapResize()
    }
    this.$refs.input.open('Nom', 'Quel est ton nom ?', { color: 'light-green darken-2', image: 'mdi-magnify' }).then((tfvalue) => {
      // console.log('nom ok : ', tfvalue)
      this.setName(tfvalue)
    })  
    this.isMounted = true
  },
  methods: {
    ...mapMutations(['addMap', 'addLoupe', 'addLettre', 'setName']),
    goTo(link){
      if (link === 'table') {
        // Est-ce que j'ai la carte dans mes items
        if (this.getmap == null ){
          this.$refs.message.open('Mon bureau', 'Pour l\'instant ce bureau ne va pas m\'aider', { color: 'orange darken-4', image: 'mdi-minus-circle' })
        } else {
          this.$refs.ok.open('Carte', 'Eh ouai ! Bonne idée ! Maintenant que tu as une carte, pourquoi ne pas l\'étudier sur ton bureau', { color: 'light-green darken-2', image: 'mdi-magnify' }).then((confirm) => {
            this.$router.push(link)
          })   
          
        }
      } else {
        this.$router.push(link)
      }
    },
    mouseover(e) {
      // console.log(e.target)
      this.$refs.sCanvas.myHover(e.target)
    },
    mouseout() {
      this.$refs.sCanvas.myLeave()
    },
    nolight() {
      // this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})  
      this.$refs.message.open('Lumière', 'On ne voit rien ici !!', { color: 'orange darken-4', image: 'mdi-pirate' })
    },
    nothing() {
      // this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' }).then((confirm) => {})  
      this.$refs.message.open('Rien', 'Il n\'y a rien ici', { color: 'orange darken-4', image: 'mdi-minus-circle' })
    },
    getMap(){
      if (this.getmap == null) {
        this.addMap()
        this.$refs.ok.open('Carte', 'Bravo tu viens de trouver une carte au trésor', { color: 'light-green darken-2', image: 'mdi-map-legend' }) 
      } else {
        this.$refs.message.open('Carte', 'Vous avez déjà la carte au trésor', { color: 'orange darken-4', image: 'mdi-minus-circle' }) 
      }
    },
    getLoupe(){
      if (this.getloupe == null) {
        this.addLoupe()
        this.$refs.ok.open('Loupe', 'Bravo tu viens de trouver une loupe', { color: 'light-green darken-2', image: 'mdi-magnify' }) 
      } else {
        this.$refs.message.open('Coffre', 'IL n\'y a plus rien là dedans !', { color: 'orange darken-4', image: 'mdi-minus-circle' }) 
      }
    },
    getLettre(){
      if (this.getlettre == null) {
        this.addLettre()
        this.$refs.ok.open('Lettre', 'Bravo tu viens de trouver une lettre', { color: 'light-green darken-2', image: 'mdi-magnify' }) 
      } else {
        this.$refs.message.open('Tapis', 'IL n\'y a plus rien là dedans !', { color: 'orange darken-4', image: 'mdi-minus-circle' }) 
      }
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
