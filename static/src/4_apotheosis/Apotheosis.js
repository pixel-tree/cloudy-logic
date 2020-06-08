/**
 * CLOUDY LOGIC
 * Scene IV
 * Apotheosis
 */

import '../../style/apotheosis.scss'

import { clear, sequencer } from '../Main'
import { apotheosis_txt, chaos_gif, twinkle_gif } from '../Media'

class Apotheosis {
  constructor(container) {

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'quoteFrame'
    container.appendChild(this._element)

    const apoQ = document.createElement('div')
    apoQ.id = 'apoQ'
    this._element.appendChild(apoQ)

    const apoQCursor = document.createElement('p')
    apoQ.appendChild(apoQCursor)

    // Split text file to array.
    var textArrayAQ = apotheosis_txt.split('\n').slice(0, 3)

    /**
     * Animation.
     */

    var iAQ = 0,
        aAQ = 0,
        isBackspacingAQ = false

    var speedForwardAQ = Math.random() * (90 - 10) + 15,
        speedBackspaceAQ = 9

    var counterApoQ = 0

    typeWriterAQ('apoQ', textArrayAQ)

    function typeWriterAQ(idAQ, arAQ) {

      var cursorElementAQ = $('#' + idAQ),
          stringAQ = arAQ[aAQ],
          typeTextAQ = cursorElementAQ.children('p')

          typeTextAQ.addClass('apoQcursor')

      var continueElementAQ = $('#' + 'continueApoQ'),
          toContinueAQ = continueElementAQ.children('p')

          toContinueAQ.addClass('continueAQ')

      // If text left to type in array...
      if (aAQ < arAQ.length) {

        // ->
        if (!isBackspacingAQ) {

          // Type string.
          if (iAQ < stringAQ.length) {
            typeTextAQ.text(typeTextAQ.text() + stringAQ.charAt(iAQ))
            iAQ++
            setTimeout(function(){ typeWriterAQ(idAQ, arAQ) }, speedForwardAQ)
          }

          // Switch to backspace mode.
          else if (iAQ == stringAQ.length) {

            toContinueAQ.text('')
            isBackspacingAQ = true
            setTimeout(function(){ typeWriterAQ(idAQ, arAQ) }, 1500)

          }

        }

        // <-
        else {

          // Backspace.
          if (typeTextAQ.text().length > 0) {
            typeTextAQ.text(typeTextAQ.text().substring(0, typeTextAQ.text().length - 1))
            setTimeout(function(){ typeWriterAQ(idAQ, arAQ) }, speedBackspaceAQ)
          }

          // Switch to next item.
          else {
            isBackspacingAQ = false
            iAQ = 0
            aAQ = (aAQ + 1)
            setTimeout(function(){ typeWriterAQ(idAQ, arAQ) }, 50)
          }

        }

      }

      // If all text in array is printed, next sequence.
      else {

        /**
         * Reformat text; hide unused elements.
         */

        document.getElementById('quoteFrame').style.display = 'none'

        const apoReQ = document.createElement('div')
        apoReQ.id = 'apoReQ'
        container.appendChild(apoReQ)

        document.getElementById('apoReQ').innerHTML =
            '<p>' + textArrayAQ[0] + '</p>' +
            '<p>' + textArrayAQ[1] + '</p>' +
            '<p>' + textArrayAQ[2] + '</p>' +
            '<p id="Qsource">' + apotheosis_txt.split('\n')[3] + '</p>'

        // Press to continue.
        const continueBox = document.createElement('div')
        continueBox.id = 'continueAQ'
        container.appendChild(continueBox)

        const continueText = '{ ↓ }'
        document.getElementById('continueAQ').innerHTML = '<p>' + continueText + '</p>'

        document.addEventListener('keyup', event => {
          if (counterApoQ == 0) {
            if (event.keyCode === 40) {

              /**
               * Next sequence.
               */

              counterApoQ += 1
              document.removeEventListener('keyup', event)

              const scrollDiv = document.createElement('div')
              scrollDiv.id = 'scrollDiv'
              container.appendChild(scrollDiv)

              const particleFrame = document.createElement('div')
              particleFrame.id = 'particleFrame'
              container.appendChild(particleFrame)

              const reglFrame = document.createElement('div')
              reglFrame.id = 'reglFrame'
              particleFrame.appendChild(reglFrame)

              // Particles.
              var REGL_COUNT = 1
              var FREQ_X = 10
              var FREQ_Y = 10
              var NUM_POINTS = 3e3

              particles()

              const apoText = new ApoText(container)

              var scrollingElement = (document.scrollingElement || document.body)
              scrollingElement.scrollTop = scrollingElement.scrollHeight

              function particles() {

                const regl = require('regl')(reglFrame)
                const mat4 = require('gl-mat4')
                const hsv2rgb = require('hsv2rgb')

                const VERT_SIZE = 4 * (4 + 4 + 3)

                const pointBuffer = regl.buffer(Array(NUM_POINTS).fill().map(function () {
                  const color = hsv2rgb(Math.random() * 360, 0.3, 0.9)
                  return [
                    // freq
                    Math.random() * FREQ_X,
                    Math.random() * FREQ_Y,
                    Math.random() * 10,
                    Math.random() * 10,
                    // phase
                    2.0 * Math.PI * Math.random(),
                    2.0 * Math.PI * Math.random(),
                    2.0 * Math.PI * Math.random(),
                    2.0 * Math.PI * Math.random(),
                    // color
                    color[0] / 0, color[1] / 0, color[2] / 0
                  ]
                }))

                const drawParticles = regl({
                  vert: `
                  precision mediump float;
                  attribute vec4 freq, phase;
                  attribute vec3 color;
                  uniform float time;
                  uniform mat4 view, projection;
                  varying vec3 fragColor;
                  void main() {
                    vec3 position = 8.0 * cos(freq.xyz * time + phase.xyz);
                    gl_PointSize = 3.0 * (1.0 + cos(freq.w * time + phase.w));
                    gl_Position = projection * view * vec4(position, 1);
                    fragColor = color;
                  }`,

                  frag: `
                  precision lowp float;
                  varying vec3 fragColor;
                  void main() {
                    if (length(gl_PointCoord.xy - 0.5) > 0.5) {
                      discard;
                    }
                    gl_FragColor = vec4(fragColor, 1);
                  }`,

                  attributes: {
                    freq: {
                      buffer: pointBuffer,
                      stride: VERT_SIZE,
                      offset: 0
                    },
                    phase: {
                      buffer: pointBuffer,
                      stride: VERT_SIZE,
                      offset: 16
                    },
                    color: {
                      buffer: pointBuffer,
                      stride: VERT_SIZE,
                      offset: 32
                    }
                  },

                  uniforms: {
                    view: ({tick}) => {
                      return mat4.lookAt([],
                        [30, 0, 45], /* 30, 30, 45 alt */
                        [0, 0, 0],
                        [0, 1, 0])
                    },
                    projection: () =>
                      mat4.perspective([],
                        Math.PI / 4,
                        600 / 900,
                        0.01,
                        1000),
                    time: ({tick}) => tick * 0.003
                  },

                  count: NUM_POINTS,

                  primitive: 'points'
                })

                regl.frame(() => {
                  regl.clear({
                    depth: 1,
                    color: [0, 0, 0, 1]
                  })

                  drawParticles()

                })

              } // particle function.

              document.addEventListener('keyup', event => {
                // D (horizontal freq increase)
                if (event.keyCode === 68) {
                  if (FREQ_Y != 10) {
                    FREQ_Y = 10
                  }
                  FREQ_X *= 3
                  REGL_COUNT += 1
                  clear('reglFrame')
                  particles()
                  document.getElementById('meta').content = REGL_COUNT
                }
                // A (horizontal freq decrease)
                if (event.keyCode === 65) {
                  if (FREQ_X <= 10) {
                    FREQ_X = 10
                  }
                  else {
                    FREQ_X /= 3
                  }
                  REGL_COUNT += 1
                  clear('reglFrame')
                  particles()
                  document.getElementById('meta').content = REGL_COUNT
                }
                // W (vertical freq increase) {
                if (event.keyCode === 87) {
                  if (FREQ_X != 10) {
                    FREQ_X = 10
                  }
                  FREQ_Y *= 3
                  REGL_COUNT += 1
                  clear('reglFrame')
                  particles()
                  document.getElementById('meta').content = REGL_COUNT
                }
                // S (horizontal freq decrease)
                if (event.keyCode === 83) {
                  if (FREQ_Y <= 10) {
                    FREQ_Y = 10
                  }
                  else {
                    FREQ_Y /= 3
                  }
                  REGL_COUNT += 1
                  clear('reglFrame')
                  particles()
                  document.getElementById('meta').content = REGL_COUNT
                }

                if (REGL_COUNT === 9) {
                  console.log("You've had your fun...")
                  NUM_POINTS = 1e5
                  clear('reglFrame')
                  particles()
                  document.getElementById('meta').content = REGL_COUNT
                  document.removeEventListener('keyup', event)
                }

                scrollingElement.scrollTop = scrollingElement.scrollHeight

              })

            }
          }
        })

      }

    } // typewriter

  }
}

class ApoText {
  constructor(container) {

    var $ = require('jquery')

    // Apotheosis textbox, text, etc.
    const particleTextBox = document.createElement('div')
    particleTextBox.id = 'particleTextBox'
    particleFrame.appendChild(particleTextBox)

    const particleCursor = document.createElement('p')
    particleTextBox.appendChild(particleCursor)

    // Split text file to array.
    var textArrayAP0 = apotheosis_txt.split('\n').slice(4, 5)

    /**
     * Animation.
     */

    var iAP0 = 0,
        aAP0 = 0,
        isBackspacingAP0 = false

    var speedForwardAP0 = Math.random() * (90 - 10) + 15,
        speedBackspaceAP0 = 3

    typeWriterAP0('particleTextBox', textArrayAP0)

    function typeWriterAP0(idAP0, arAP0) {

      var cursorElementAP0 = $('#' + idAP0),
          stringAP0 = arAP0[aAP0],
          typeTextAP0 = cursorElementAP0.children('p')

          typeTextAP0.addClass('apo0cursor')

      // If text left to type in array...
      if (aAP0 < arAP0.length) {

        // ->
        if (!isBackspacingAP0) {

          // Type string.
          if (iAP0 < stringAP0.length) {
            typeTextAP0.text(typeTextAP0.text() + stringAP0.charAt(iAP0))
            iAP0++
            setTimeout(function(){ typeWriterAP0(idAP0, arAP0) }, speedForwardAP0)
          }

          // Switch to backspace mode.
          else if (iAP0 == stringAP0.length) {

            // Press to continue.
            const wasd = document.createElement('p')
            wasd.id = 'continueWASD'
            particleTextBox.appendChild(wasd)
            $('#continueWASD').text('{ W A S D }')

            var scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight

            if (document.getElementById('meta').content != 9) {
              document.addEventListener('keyup', event => {
                var counterAP0 = document.getElementById('meta').content
                if (counterAP0 == 9) {
                  $('#continueWASD').remove()
                  isBackspacingAP0 = true
                  setTimeout(function(){ typeWriterAP0(idAP0, arAP0) })
                  document.removeEventListener('keyup', event)
                }
              })
            }

            else {
              isBackspacingAP0 = true
              setTimeout(function(){ typeWriterAP0(idAP0, arAP0) })
            }

          }

        }

        // <-
        else {

          // Backspace.
          if (typeTextAP0.text().length > 0) {
            typeTextAP0.text(typeTextAP0.text().substring(0, typeTextAP0.text().length - 1))
            setTimeout(function(){ typeWriterAP0(idAP0, arAP0) }, speedBackspaceAP0)
          }

          // Switch to next item.
          else {
            isBackspacingAP0 = false
            iAP0 = 0
            aAP0 = (aAP0 + 1)
            setTimeout(function(){ typeWriterAP0(idAP0, arAP0) }, 50)
          }

        }

      }

      // If all text in array is printed, next sequence.
      else {

        /**
         * Reformat frames and continue to next sequence.
         */

        if (document.getElementById('particleFrame') != null) {

          clear('particleFrame')
          clear('meta')
          document.getElementById('particleFrame').setAttribute("id", "particleReFrame")

          const chaos = new Chaos(container)

        }

      }

    } // typewriter

  }
}

class Chaos {
  constructor(container) {

    var $ = require('jquery')

    // Main frame.
    const particleReFrame = document.getElementById('particleReFrame')

    // Chaos GIF.
    const chaosGIF = document.createElement('img')
    chaosGIF.id = 'chaosGIF'
    chaosGIF.src = chaos_gif
    particleReFrame.appendChild(chaosGIF)

    // Chaos textbox, text, etc.
    const chaosTextBox = document.createElement('div')
    chaosTextBox.id = 'chaosTextBox'
    particleReFrame.appendChild(chaosTextBox)

    const chaosCursor = document.createElement('p')
    chaosTextBox.appendChild(chaosCursor)

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueChaos'
    particleReFrame.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Split text file to array.
    var textArrayAP1 = apotheosis_txt.split('\n').slice(5, 12)

    var scrollingElement = (document.scrollingElement || document.body)

    /**
     * Animation.
     */

    var iAP1 = 0,
        aAP1 = 0,
        isBackspacingAP1 = false

    var speedForwardAP1 = Math.random() * (90 - 10) + 15,
        speedBackspaceAP1 = 3

    // Counter to determine order of events.
    var counterAP1 = 0
    // Counter for eventlistener.
    var counterEvAP1 = 0

    typeWriterAP1('chaosTextBox', textArrayAP1)

    function typeWriterAP1(idAP1, arAP1) {

      var cursorElementAP1 = $('#' + idAP1),
          stringAP1 = arAP1[aAP1],
          typeTextAP1 = cursorElementAP1.children('p')

      // Set correct cursor size relative to text size.
      if (counterAP1 < 2 || counterAP1 == 3 || counterAP1 == 6) {
        typeTextAP1.addClass('apo1cursor')
      } else if (counterAP1 == 2) {
        typeTextAP1.addClass('apo2cursor')
      } else if (counterAP1 == 4) {
        typeTextAP1.addClass('apo3cursor')
      } else if (counterAP1 == 5) {
        typeTextAP1.addClass('apo4cursor')
      }

      var continueElementAP1 = $('#' + 'continueChaos'),
          toContinueAP1 = continueElementAP1.children('p')

          toContinueAP1.addClass('continueAP1')

          toContinueAP1.text('')

      // If text left to type in array...
      if (aAP1 < arAP1.length) {

        // ->
        if (!isBackspacingAP1) {

          // Type string.
          if (iAP1 < stringAP1.length) {
            typeTextAP1.text(typeTextAP1.text() + stringAP1.charAt(iAP1))
            iAP1++
            setTimeout(function(){ typeWriterAP1(idAP1, arAP1) }, speedForwardAP1)
            scrollingElement.scrollTop = scrollingElement.scrollHeight
          }

          // Switch to backspace mode.
          else if (iAP1 == stringAP1.length) {

            // Add to counter after each line in text file.
            counterAP1 += 1

            if (counterAP1 != 5 && counterAP1 != 2) {
              toContinueAP1.text('{ SPACE }')
              counterEvAP1 = 0
            }

            scrollingElement.scrollTop = scrollingElement.scrollHeight

            /**
             * Sequences without user interaction.
             */

            if (counterAP1 == 2) {

              historyTextBox.innerHTML = '<p>' + textArrayAP1[1] + '</p>'

              const demonTextBox = document.createElement('div')
              demonTextBox.id = 'demonTextBox'
              particleReFrame.insertBefore(demonTextBox, continueBox)

              const demonCursor = document.createElement('p')
              demonTextBox.appendChild(demonCursor)

              iAP1 = 0
              aAP1 = (aAP1 + 1)
              setTimeout(function(){ typeWriterAP1('demonTextBox', arAP1) }, 50)

            }

            else if (counterAP1 == 4) {

              quantumTextBox.innerHTML = '<p>' + textArrayAP1[3] + '</p>'

              const maxwellTextBox = document.createElement('div')
              maxwellTextBox.id = 'maxwellTextBox'
              particleReFrame.insertBefore(maxwellTextBox, continueBox)

              const maxwellCursor = document.createElement('p')
              maxwellTextBox.appendChild(maxwellCursor)

              iAP1 = 0
              aAP1 = (aAP1 + 1)
              setTimeout(function(){ typeWriterAP1('maxwellTextBox', arAP1) }, 50)

            }

            else if (counterAP1 == 5) {

              maxwellTextBox.innerHTML = '<p>' + textArrayAP1[4] + '</p>'

              const maxwellNameBox = document.createElement('div')
              maxwellNameBox.id = 'maxwellNameBox'
              particleReFrame.insertBefore(maxwellNameBox, continueBox)

              const maxwellNameCursor = document.createElement('p')
              maxwellNameBox.appendChild(maxwellNameCursor)

              iAP1 = 0
              aAP1 = (aAP1 + 1)
              setTimeout(function(){ typeWriterAP1('maxwellNameBox', arAP1) }, 50)

            }

            /**
             * User interaction required.
             */

            else {

              document.addEventListener('keyup', event => {
                if (event.code === 'Space' && aAP1 < arAP1.length) {
                  if (counterEvAP1 == 0) {

                    counterEvAP1 += 1

                    if (counterAP1 == 1) {

                      chaosTextBox.innerHTML = '<p>' + textArrayAP1[0] + '</p>'

                      toContinueAP1.text('')

                      const twinkleGIF = document.createElement('img')
                      twinkleGIF.id = 'twinkleGIF'
                      twinkleGIF.src = twinkle_gif
                      particleReFrame.insertBefore(twinkleGIF, continueBox)

                      const historyTextBox = document.createElement('div')
                      historyTextBox.id = 'historyTextBox'
                      particleReFrame.insertBefore(historyTextBox, continueBox)

                      const historyCursor = document.createElement('p')
                      historyTextBox.appendChild(historyCursor)

                      iAP1 = 0
                      aAP1 = (aAP1 + 1)
                      setTimeout(function(){ typeWriterAP1('historyTextBox', arAP1) }, 50)
                    }

                    else if (counterAP1 == 3) {

                      demonTextBox.innerHTML = '<p>' + textArrayAP1[2] + '</p>'

                      toContinueAP1.text('')

                      const quantumTextBox = document.createElement('div')
                      quantumTextBox.id = 'quantumTextBox'
                      particleReFrame.insertBefore(quantumTextBox, continueBox)

                      const quantumCursor = document.createElement('p')
                      quantumTextBox.appendChild(quantumCursor)

                      iAP1 = 0
                      aAP1 = (aAP1 + 1)
                      setTimeout(function(){ typeWriterAP1('quantumTextBox', arAP1) }, 50)

                    }

                    else if (counterAP1 == 6) {

                      maxwellNameBox.innerHTML = '<p>' + textArrayAP1[5] + '</p>'

                      toContinueAP1.text('')

                      const abstractTextBox = document.createElement('div')
                      abstractTextBox.id = 'abstractTextBox'
                      particleReFrame.insertBefore(abstractTextBox, continueBox)

                      const abstractCursor = document.createElement('p')
                      abstractTextBox.appendChild(abstractCursor)

                      const fillerBox = document.createElement('div')
                      fillerBox.id = 'fillerBox'
                      particleReFrame.insertBefore(fillerBox, continueBox)

                      iAP1 = 0
                      aAP1 = (aAP1 + 1)
                      setTimeout(function(){ typeWriterAP1('abstractTextBox', arAP1) }, 50)

                    }

                    else if (counterAP1 == 7) {

                      iAP1 = 0
                      aAP1 = (aAP1 + 1)
                      setTimeout(function(){ typeWriterAP1(idAP1, arAP1) }, 50)

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
         * Next sequence...
         */

        document.getElementById('meta').content = ''

        if (document.getElementById('mode').content == 'linear') {
          document.getElementById('scene').content = 'chaos'
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

export { Apotheosis }
