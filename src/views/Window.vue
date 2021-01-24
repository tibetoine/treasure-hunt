<template>
   <v-card 
    color="#444"
    dark>
    <img src="@/assets/garden.jpg" alt="garden" class="garden" ref="garden" id="garden"></img>

    <pirate-ok ref="ok"></pirate-ok>
  </v-card>
</template>

<script>
import PirateOk from '../components/PirateOk.vue'
export default {
  name: 'Window',
  components: {
    PirateOk
  },

  data: () => ({}),
  mounted () {
    setTimeout(() => {  
      this.$refs.ok.open('Balade', 'Super promenade, mais il n\'y a rien à faire ici !', { color: 'orange darken-4', image: 'mdi-pirate' }).then((confirm) => {
        this.goTo('/')
      }) }, 1000);        
    
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>
<style scoped>
  .garden {
    width:100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding:10px;
  }
</style>