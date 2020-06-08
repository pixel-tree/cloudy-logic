/**
 * CLOUDY LOGIC
 * Scene V
 * Chaos
 */

import '../../style/chaos.scss'

import { clear, sequencer } from '../Main'
import { chaos_txt } from '../Media'

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

    /**
     * Text.
     */

    const textButterfly = new ButterflyText()

  }
}

class ButterflyText {
  constructor(container) {

    var $ = require('jquery')

    // Main text frame.
    const butterflyFrame = document.createElement('div')
    butterflyFrame.id = 'butterflyFrame'
    document.getElementById('container').appendChild(butterflyFrame)

    // First textbox, first cursor, etc.
    const fichteTextBox = document.createElement('div')
    fichteTextBox.id = 'fichteTextBox'
    butterflyFrame.appendChild(fichteTextBox)

    const fichteCursor = document.createElement('p')
    fichteTextBox.appendChild(fichteCursor)

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueButterfly'
    butterflyFrame.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Split text file to array.
    var textArrayBF = chaos_txt.split('\n')

    var scrollingElement = (document.scrollingElement || document.body)

    /**
     * Animation.
     */

    var iBF = 0,
        aBF = 0,
        isBackspacingBF = false

    var speedForwardBF = Math.random() * (90 - 10) + 15,
        speedBackspaceBF = 3

    // Counter to determine order of events.
    var counterBF = 0
    // Counter for eventlistener.
    var counterEvBF = 0

    typeWriterBF('fichteTextBox', textArrayBF)

    function typeWriterBF(idBF, arBF) {

      var cursorElementBF = $('#' + idBF),
          stringBF = arBF[aBF],
          typeTextBF = cursorElementBF.children('p')

      // Set correct cursor size relative to text size.
      if (counterBF < 1 || counterBF > 1) {
        typeTextBF.addClass('bf1cursor')
      } else if (counterBF == 1) {
        typeTextBF.addClass('bf2cursor')
      }

      var continueElementBF = $('#' + 'continueButterfly'),
          toContinueBF = continueElementBF.children('p')

          toContinueBF.addClass('continueBF')

          toContinueBF.text('')

      // If text left to type in array...
      if (aBF < arBF.length) {

        // ->
        if (!isBackspacingBF) {

          // Type string.
          if (iBF < stringBF.length) {
            typeTextBF.text(typeTextBF.text() + stringBF.charAt(iBF))
            iBF++
            setTimeout(function(){ typeWriterBF(idBF, arBF) }, speedForwardBF)
            scrollingElement.scrollTop = scrollingElement.scrollHeight
          }

          // Switch to backspace mode.
          else if (iBF == stringBF.length) {

            // Add to counter after each line in text file.
            counterBF += 1

            if (counterBF != 1 && counterBF != 8) {
              toContinueBF.text('{ SPACE }')
              // Zero eventlistener counter.
              counterEvBF = 0
            }

            else if (counterBF == 8) {
              toContinueBF.text('{ press space to end }')
              // Zero eventlistener counter.
              counterEvBF = 0
            }

            scrollingElement.scrollTop = scrollingElement.scrollHeight

            /**
             * Sequences without user interaction.
             */

            if (counterBF == 1) {

              fichteTextBox.innerHTML = '<p>' + textArrayBF[0] + '</p>'

              const fichteNameBox = document.createElement('div')
              fichteNameBox.id = 'fichteNameBox'
              butterflyFrame.insertBefore(fichteNameBox, continueBox)

              const fichteCursor = document.createElement('p')
              fichteNameBox.appendChild(fichteCursor)

              iBF = 0
              aBF = (aBF + 1)
              setTimeout(function(){ typeWriterBF('fichteNameBox', arBF) }, 50)

            }

            /**
             * User interaction required.
             */

            else {

              document.addEventListener('keyup', event => {
                if (event.code === 'Space' && aBF < arBF.length) {
                  if (counterEvBF == 0) {

                    counterEvBF += 1

                    if (counterBF == 2) {

                      fichteNameBox.innerHTML = '<p>' + textArrayBF[1] + '</p>'

                      toContinueBF.text('')

                      const fillerB = document.createElement('div')
                      fillerB.id = 'fillerB'
                      butterflyFrame.insertBefore(fillerB, continueBox)

                      const bfTextBox = document.createElement('div')
                      bfTextBox.id = 'bfTextBox'
                      butterflyFrame.insertBefore(bfTextBox, continueBox)

                      const butterflyCursor = document.createElement('p')
                      bfTextBox.appendChild(butterflyCursor)

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF('bfTextBox', arBF) }, 50)
                    }

                    else if (counterBF == 3) {

                      bfTextBox.innerHTML = '<p>' + textArrayBF[2] + '</p>'

                      toContinueBF.text('')

                      const neuralTextBox = document.createElement('div')
                      neuralTextBox.id = 'neuralTextBox'
                      butterflyFrame.insertBefore(neuralTextBox, continueBox)

                      const neuralCursor = document.createElement('p')
                      neuralTextBox.appendChild(neuralCursor)

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF('neuralTextBox', arBF) }, 50)

                    }

                    else if (counterBF == 4) {

                      neuralTextBox.innerHTML = '<p>' + textArrayBF[3] + '</p>'

                      toContinueBF.text('')

                      const expTextBox = document.createElement('div')
                      expTextBox.id = 'expTextBox'
                      butterflyFrame.insertBefore(expTextBox, continueBox)

                      const expCursor = document.createElement('p')
                      expTextBox.appendChild(expCursor)

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF('expTextBox', arBF) }, 50)

                    }

                    else if (counterBF == 5) {

                      expTextBox.innerHTML = '<p>' + textArrayBF[4] + '</p>'

                      toContinueBF.text('')

                      const dataTextBox = document.createElement('div')
                      dataTextBox.id = 'dataTextBox'
                      butterflyFrame.insertBefore(dataTextBox, continueBox)

                      const dataCursor = document.createElement('p')
                      dataTextBox.appendChild(dataCursor)

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF('dataTextBox', arBF) }, 50)

                    }

                    else if (counterBF == 6) {

                      dataTextBox.innerHTML = '<p>' + textArrayBF[5] + '</p>'

                      toContinueBF.text('')

                      const cplxTextBox = document.createElement('div')
                      cplxTextBox.id = 'cplxTextBox'
                      butterflyFrame.insertBefore(cplxTextBox, continueBox)

                      const complexCursor = document.createElement('p')
                      cplxTextBox.appendChild(complexCursor)

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF('cplxTextBox', arBF) }, 50)

                    }

                    else if (counterBF == 7) {

                      cplxTextBox.innerHTML = '<p>' + textArrayBF[6] + '</p>'

                      toContinueBF.text('')

                      const cbTextBox = document.createElement('div')
                      cbTextBox.id = 'cbTextBox'
                      butterflyFrame.insertBefore(cbTextBox, continueBox)

                      const cbCursor = document.createElement('p')
                      cbTextBox.appendChild(cbCursor)

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF('cbTextBox', arBF) }, 50)

                    }

                    else if (counterBF == 8) {

                      iBF = 0
                      aBF = (aBF + 1)
                      setTimeout(function(){ typeWriterBF(idBF, arBF) }, 50)

                    }

                  }
                }
              })

            }

          }

        }

      }

      else {

        /**
         * The end.
         */

        if (document.getElementById('mode').content == 'linear') {
          document.getElementById('mode').content = 'end'
          document.getElementById('scene').content = 'pythia'
          sequencer()
         }

        else {
          document.getElementById('scene').content = 'pythia'
          sequencer()
        }

      }

    } // typewriter

  }
}

export { Butterfly }
