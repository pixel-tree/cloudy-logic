/**
 * CLOUDY LOGIC
 * Cursor
 */

class Cursor {
  constructor() {

    let $ = require('jquery')

    const cursor = document.createElement('div')
    cursor.id = 'cursor'
    document.body.appendChild(cursor)

    $('#cursor').hide().fadeIn(1200)

    $('#container').on('mousemove', (event) => {
      $('#cursor').css({
        left: event.clientX,
        top: event.clientY
      })
    })

      const p5 = require('p5')

      const sketch = (s) => {

        let layers = []
        let evolution, palette

        s.setup = () => {

          s.createCanvas(300, 300)

          evolution = 0
          palette = [
            s.color(220, 220, 220, 30),
            s.color(211, 211, 211, 30),
            s.color(192, 192, 192, 30),
            s.color(169, 169, 169, 30),
            s.color(128, 128, 128, 30),
            s.color(105, 105, 105, 30),
            s.color(119, 136, 153, 30),
            s.color(112, 128, 144, 30)
          ]

          for (let i = 0; i < 110; i++) {
            layers.push(
              new Layer(
                0.1 + i / 1.2,
                s.width / 2, s.height / 2,
                i * 1,
                i * s.random(90),
                palette[s.floor(s.random(8))]
              )
            )
          }

        }

        s.draw = () => {

          for (let i = 0; i < layers.length; i++) {
            layers[i].show(evolution)
          }

          evolution += 0.01

        }

        function Layer(radius, x_POS, y_POS, distortion, rotation, colour) {

          this.radius = radius
          this.x_POS = x_POS
          this.y_POS = y_POS
          this.distortion = distortion
          this.rotation = rotation
          this.colour = colour

          this.show = function(evolution) {

            s.noStroke()
            s.fill(this.colour)
            s.push()
            /* s.translate(s.mouseX, y_POS) */
            s.translate(x_POS, y_POS)
            s.rotate(this.rotation + evolution)
            s.beginShape()

            let off = 0

            for (let i = 0; i < s.TWO_PI; i += 0.1) {
              const offset = s.map(
                s.noise(off, evolution), 0, 1, - this.distortion, this.distortion
              )
              const r = this.radius + offset
              const x = r * s.cos(i)
              const y = r * s.sin(i)
              s.vertex(x, y)
              off += 0.1
            }

            s.endShape()
            s.pop()

          }

        }

      }

    new p5(sketch, 'cursor')

  }
}

export { Cursor }
