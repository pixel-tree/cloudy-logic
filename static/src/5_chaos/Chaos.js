/**
 * CLOUDY LOGIC
 * Scene V
 * Chaos
 */

import '../../style/chaos.scss'

import { clear, sequencer } from '../Main'
import { chaos_txt } from '../Media'

class Chaos {
  constructor(container) {

    const butterfly = new Butterfly()

  }
}

class Butterfly {
  constructor(container) {

    /**
     * Container
     */

    this._element = document.createElement('div')
    this._element.id = 'sketchFrame'
    container.appendChild(this._element)

    /**
     * Sketch
     */

    const p5 = require('p5')

    const sketch = (s) => {

      var time
      var size

      s.setup = () => {

        s.createCanvas(450, 450)
        s.background(0)
        time = 0
        size = 300

      }

      s.draw = () => {

        s.translate(s.width / 2, s.height / 2)
        s.stroke(255)
        s.noFill()
        s.strokeWeight(1)

        var da = s.PI / 100
        var dx = s.mouseY / 9000
        var xoff = 100

        s.beginShape()

        for (var a = -s.PI / 2; a <= s.PI / 2; a += da) {
          var n = s.noise(xoff, time)
          var r = s.sin(2 * a) * s.map(n, 0, 1, 50, 325)
          var x = r * s.cos(a)
          var y = r * s.sin(a)
          var colourvar = s.frameCount
          xoff += dx
          var r = s.map(colourvar, 0, s.width, s.random(230), 255)
          var g = s.map(colourvar, 0, s.width, s.random(210), 255)
          var b = s.map(colourvar, 0, s.height, s.random(250), 255)
          s.stroke(r, g, b, 15)
          s.vertex(x, y)
        }

        for (var a = s.PI / 2; a <= 3 * s.PI / 2; a += da) {
          var n = s.noise(xoff, time)
          var r = s.sin(2 * a) * s.map(n, 0, 1, 50, 325)
          var x = r * s.cos(a)
          var y = r * s.sin(a)
          xoff -= dx
          var r = s.map(colourvar, 0, s.width, s.random(230), 255)
          var g = s.map(colourvar, 0, s.width, s.random(210), 255)
          var b = s.map(colourvar, 0, s.height, s.random(250), 255)
          s.stroke(r, g, b, 15)
          s.vertex(x, y)
        }

        time += 0.01

        if (s.frameCount % 2100 === 1) {
          s.background(0)
        }

        s.endShape()

      }

    }

    /**
     * Frame sketch.
     */

    const sketchButterfly = new p5(sketch, 'sketchFrame')

  }
}

export { Butterfly }

/*

if (document.getElementById('mode').content == 'linear') {
  document.getElementById('scene').content = 'end'
  sequencer()
}

else {
  document.getElementById('scene').content = 'pythia'
  sequencer()
}

*/
