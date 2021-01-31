<template>
  <v-container>
    <canvas id="myCanvas"></canvas>
  </v-container>
</template>

<script>
export default {
  name: 'SpecialCanvas',

  data: () => ({
    hdc: null
  }),
  mounted() {
    // get the target image
    var img = document.getElementById('chambreId')

    var x, y, w, h

    // get it's position and width+height
    x = img.offsetLeft
    y = img.offsetTop
    w = img.clientWidth
    h = img.clientHeight

    // move the canvas, so it's contained by the same parent as the image
    var imgParent = img.parentNode
    // console.log('imgParent', imgParent)
    var can = document.getElementById('myCanvas')
    imgParent.appendChild(can)

    // place the canvas in front of the image
    can.style.zIndex = 1

    // position it over the image
    can.style.left = x + 'px'
    can.style.top = y + 'px'

    // make same size as the image
    can.setAttribute('width', w + 'px')
    can.setAttribute('height', h + 'px')

    // get it's context
    this.hdc = can.getContext('2d')

    // set the 'default' values for the colour/width of fill/stroke operations
    this.hdc.fillStyle = 'red'
    this.hdc.strokeStyle = 'red'
    this.hdc.lineWidth = 2
  },
  methods: {
    drawPoly(coOrdStr) {
      var mCoords = coOrdStr.split(',')
      var i, n
      n = mCoords.length

      this.hdc.beginPath()
      this.hdc.moveTo(mCoords[0], mCoords[1])
      for (i = 2; i < n; i += 2) {
        this.hdc.lineTo(mCoords[i], mCoords[i + 1])
      }
      this.hdc.lineTo(mCoords[0], mCoords[1])
      this.hdc.stroke()
    },

    drawRect(coOrdStr) {
      var mCoords = coOrdStr.split(',')
      // console.log(mCoords)
      var top, left, bot, right
      left = mCoords[0]
      top = mCoords[1]
      right = mCoords[2]
      bot = mCoords[3]
      this.hdc.strokeRect(left, top, right - left, bot - top)
    },
    myHover(element) {
      var hoveredElement = element
      var coordStr = element.getAttribute('coords')
      var areaType = element.getAttribute('shape')

      switch (areaType) {
        case 'polygon':
        case 'poly':
          this.drawPoly(coordStr)
          break

        case 'rect':
          this.drawRect(coordStr)
      }
    },
    myLeave() {
      var canvas = document.getElementById('myCanvas')
      this.hdc.clearRect(0, 0, canvas.width, canvas.height)
    }
  }
}
</script>
