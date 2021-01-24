<template>
  <v-card 
    color="#444"
    dark>
       
    <img src="@/assets/chambre-nuit.jpg" alt="chambre"  usemap="#image-map" class="chambre" ref="chambre" id="chambreId"></img>
    
    
      
    
    <pirate-confirm ref="confirm"></pirate-confirm>
    <pirate-message ref="message"></pirate-message>
    <pirate-ok ref="ok"></pirate-ok>
  </v-card>
</template>

<script>
// @ is an alias to /src
import SpecialCanvas from '@/components/SpecialCanvas.vue'
import imageMapResize from '@/assets/imageMapResizer.min.js'
import { mapState } from 'vuex'
import PirateConfirm from '../components/PirateConfirm.vue'
import PirateMessage from '../components/PirateMessage.vue'
import PirateOk from '../components/PirateOk.vue'

export default {
  name: 'Home',
  components: {
    SpecialCanvas,
    PirateConfirm,
    PirateMessage,
    PirateOk
  },
  data: () => ({
     isMounted: false
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    light: state => state.light
  }),
  mounted() {
    this.$refs.confirm.open('DODO', 'Tu es sûr que tu veux faire dodo ?', { color: 'grey', image: 'mdi-sleep' }).then((confirm) => {
      if (!confirm) {
        this.goBack()
      } else {
          this.$refs.ok.open('DODO 30 min', 'Tu viens de dormir 30 min, tu es super reposé maintenant.', { color: 'primary', image: 'mdi-sleep' }).then((confirm) => {
            this.goBack()
          })
      }
    })
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
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
