<template>
  <div>
    <v-card color="white" v-if="!codeok">
      <v-form @submit.prevent="foundcode()">
        <v-card-text color="black">
          <v-text-field
            color="black"
            label="Code secret"
            outlined
            v-model="csecret"
            ref="tf"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            type="submit"
            color="light-green darken-2"
            class="ma-2 white--text"
          >
            <v-icon left dark>
              mdi-check
            </v-icon>
            Essayer ce code !
          </v-btn>
          <v-btn @click="goTo('/')" color="primary" class="ma-2 white--text">
            <v-icon left dark>
              mdi-arrow-left
            </v-icon>
            Revenir à la carte
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-card>
      <v-row v-if="codeok">
        <v-col>
          <div id="drawTable" ref="mytable" :style="getStyle()">
            <table
              style="width:100%;height:100%;"
              cellspacing="0"
              border="1"
              cellpadding="0"
              class="grxd"
            >
              <tr>
                <td style="cursor:pointer;" id="td1" @click="proceed(1)"></td>
                <td style="cursor:pointer;" id="td2" @click="proceed(2)"></td>
                <td style="cursor:pointer;" id="td3" @click="proceed(3)"></td>
                <td style="cursor:pointer;" id="td4" @click="proceed(4)"></td>
                <td style="cursor:pointer;" id="td5" @click="proceed(5)"></td>
                <td style="cursor:pointer;" id="td6" @click="proceed(6)"></td>
                <td style="cursor:pointer;" id="td7" @click="proceed(7)"></td>
                <td style="cursor:pointer;" id="td8" @click="proceed(8)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td9" @click="proceed(9)"></td>
                <td style="cursor:pointer;" id="td10" @click="proceed(10)"></td>
                <td style="cursor:pointer;" id="td11" @click="proceed(11)"></td>
                <td style="cursor:pointer;" id="td12" @click="proceed(12)"></td>
                <td style="cursor:pointer;" id="td13" @click="proceed(13)"></td>
                <td style="cursor:pointer;" id="td14" @click="proceed(14)"></td>
                <td style="cursor:pointer;" id="td15" @click="proceed(15)"></td>
                <td style="cursor:pointer;" id="td16" @click="proceed(16)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td17" @click="proceed(17)"></td>
                <td style="cursor:pointer;" id="td18" @click="proceed(18)"></td>
                <td style="cursor:pointer;" id="td19" @click="proceed(19)"></td>
                <td style="cursor:pointer;" id="td20" @click="proceed(20)"></td>
                <td style="cursor:pointer;" id="td21" @click="proceed(21)"></td>
                <td style="cursor:pointer;" id="td22" @click="proceed(22)"></td>
                <td style="cursor:pointer;" id="td23" @click="proceed(23)"></td>
                <td style="cursor:pointer;" id="td24" @click="proceed(24)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td25" @click="proceed(25)"></td>
                <td style="cursor:pointer;" id="td26" @click="proceed(26)"></td>
                <td style="cursor:pointer;" id="td27" @click="proceed(27)"></td>
                <td style="cursor:pointer;" id="td28" @click="proceed(28)"></td>
                <td style="cursor:pointer;" id="td29" @click="proceed(29)"></td>
                <td style="cursor:pointer;" id="td30" @click="proceed(30)"></td>
                <td style="cursor:pointer;" id="td31" @click="proceed(31)"></td>
                <td style="cursor:pointer;" id="td32" @click="proceed(32)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td33" @click="proceed(33)"></td>
                <td style="cursor:pointer;" id="td34" @click="proceed(34)"></td>
                <td style="cursor:pointer;" id="td35" @click="proceed(35)"></td>
                <td style="cursor:pointer;" id="td36" @click="proceed(36)"></td>
                <td style="cursor:pointer;" id="td37" @click="proceed(37)"></td>
                <td style="cursor:pointer;" id="td38" @click="proceed(38)"></td>
                <td style="cursor:pointer;" id="td39" @click="proceed(39)"></td>
                <td style="cursor:pointer;" id="td40" @click="proceed(40)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td41" @click="proceed(41)"></td>
                <td style="cursor:pointer;" id="td42" @click="proceed(42)"></td>
                <td style="cursor:pointer;" id="td43" @click="proceed(43)"></td>
                <td style="cursor:pointer;" id="td44" @click="proceed(44)"></td>
                <td style="cursor:pointer;" id="td45" @click="proceed(45)"></td>
                <td style="cursor:pointer;" id="td46" @click="proceed(46)"></td>
                <td style="cursor:pointer;" id="td47" @click="proceed(47)"></td>
                <td style="cursor:pointer;" id="td48" @click="proceed(48)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td49" @click="proceed(49)"></td>
                <td style="cursor:pointer;" id="td50" @click="proceed(50)"></td>
                <td style="cursor:pointer;" id="td51" @click="proceed(51)"></td>
                <td style="cursor:pointer;" id="td52" @click="proceed(52)"></td>
                <td style="cursor:pointer;" id="td53" @click="proceed(53)"></td>
                <td style="cursor:pointer;" id="td54" @click="proceed(54)"></td>
                <td style="cursor:pointer;" id="td55" @click="proceed(55)"></td>
                <td style="cursor:pointer;" id="td56" @click="proceed(56)"></td>
              </tr>
              <tr>
                <td style="cursor:pointer;" id="td57" @click="proceed(57)"></td>
                <td style="cursor:pointer;" id="td58" @click="proceed(58)"></td>
                <td style="cursor:pointer;" id="td59" @click="proceed(59)"></td>
                <td style="cursor:pointer;" id="td60" @click="proceed(60)"></td>
                <td style="cursor:pointer;" id="td61" @click="proceed(61)"></td>
                <td style="cursor:pointer;" id="td62" @click="proceed(62)"></td>
                <td style="cursor:pointer;" id="td63" @click="proceed(63)"></td>
                <td style="cursor:pointer;" id="td64" @click="proceed(64)"></td>
              </tr>
            </table>
          </div>
        </v-col>
        <v-col>
          <v-card style="width:90%;">
            <v-app-bar color="primary">
              <v-btn icon><v-icon large>mdi-map-legend</v-icon></v-btn>
              <v-toolbar-title>Voici le chemin à emprunter</v-toolbar-title>

              <v-spacer></v-spacer>
            </v-app-bar>
            <v-card-text>
              <p v-for="op in ops">{{ op.steps }} {{ op.text }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                @click="found()"
                color="light-green darken-2"
                class="ma-2 white--text"
              >
                <v-icon left dark>
                  mdi-check
                </v-icon>
                J'ai trouvé le trésor !
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <pirate-ok ref="ok"></pirate-ok>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PirateOk from '../components/PirateOk.vue'
export default {
  components: { PirateOk },
  name: 'Bag',

  data: () => ({
    htmltable: '',
    next: 0,
    last: 0,
    codeok: false,
    csecret: ''
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    items: (state) => state.items,
    op1: (state) => state.enigma.op1,
    op2: (state) => state.enigma.op2,
    ops: (state) => state.enigma2.ops,
    result: (state) => state.enigma2.result
  }),
  mounted() {
    this.htmltable = this.drawTable()
    this.$refs.tf.focus()
    // console.log(this.htmltable)
  },
  methods: {
    proceed(i) {
      if (this.last > 0) {
        document.querySelector('#td' + this.last).style.background = 'none'
      }
      document.querySelector('#td' + i).style.backgroundColor = '#6BE535'
      document.querySelector('#td' + i).style.opacity = '0.5'
      this.last = i

      return ''
    },
    foundcode() {
      // console.log('!!!!!!!!!!!!!!!!!!!!', this.csecret)
      let result = '' + (this.op1 + this.op2)
      // console.log('result : ', result)
      if (this.csecret == result) {
        this.$refs.ok
          .open('Code bon', "Bravo c'est le bon code !", {
            color: 'light-green darken-2',
            image: 'mdi-check'
          })
          .then((confirm) => {
            this.codeok = true
          })
      } else {
        this.$refs.ok.open(
          'Code erroné',
          "Non ce n'est pas le bon code. Le bon code est sur une lettre. As-tu trouvé la lettre de pirate ?",
          {
            color: 'red darken-1',
            image: 'mdi-minus-circle'
          }
        )
      }
    },
    found() {
      if (this.last == 0) {
        this.$refs.ok.open('Pas de case', 'Il faut choisir une case !', {
          color: 'red darken-1',
          image: 'mdi-minus-circle'
        })
        return
      }
      let result = '' + this.result
      if (this.last == result) {
        this.goTo('/tresor')
      } else {
        this.$refs.ok.open('Non', "Non le trésor n'est pas là !", {
          color: 'red darken-1',
          image: 'mdi-map-legend'
        })
      }
    },
    goTo(link) {
      if (link === '404') {
      }
      this.$router.push(link)
    },
    getImage(item) {
      return require('../assets/' + item.image)
    },
    getMap() {
      let re = require('../assets/map.jpg')
      return re
    },
    getStyle() {
      let style =
        'background-image:url(' +
        this.getMap() +
        ');background-repeat:no-repeat;background-size:contain;background-position:center;'
      return style
    },
    drawTable() {
      var x = 8
      var y = 8
      var t =
        '<table style="width:100%;height:100%;" cellspacing="0" border="1" cellpadding="0" class="grxd">'
      for (var i = 1; i <= x * y; i++) {
        t += i == 1 ? '<tr>' : ''
        t +=
          '<td style="cursor:pointer;" id="td' +
          i +
          '" @click="proceed(' +
          i +
          ')"></td>'
        if (i == x * y) {
          t += '</tr>'
        } else {
          t += i % 8 === 0 ? '</tr><tr>' : ''
        }
      }
      t += '</table>'
      return t
    }
  }
}
</script>
<style scoped>
.carte {
  height: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
#drawTable {
  width: 600px;
  height: 600px;
}
table > td {
  border: 1px solid #dfdfdf;
  padding: 0;
  margin: 0;
}
.grxd {
  width: 100%;
  height: 100%;
}
</style>
