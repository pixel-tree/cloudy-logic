/**
 * CLOUDY LOGIC
 * Scene III
 * Noise
 */

import '../../style/noise.scss'

import { clear, sequencer } from '../Main'
import { noise1_gif, noise2_gif, noise3_gif, noise_txt } from '../Media'

class Noise {
  constructor(container) {

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'quoteFrame'
    container.appendChild(this._element)

    const noiseQ = document.createElement('div')
    noiseQ.id = 'noiseQ'
    this._element.appendChild(noiseQ)

    const noiseQCursor = document.createElement('p')
    noiseQ.appendChild(noiseQCursor)

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueNoiseQ'
    this._element.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Split text file to array.
    var textArrayQ = noise_txt.split('\n').slice(0, 1)

    /**
     * Animation.
     */

    var iQ = 0,
        aQ = 0,
        isBackspacingQ = false

    var speedForwardQ = Math.random() * (90 - 10) + 15,
        speedBackspaceQ = 3

    var counterQ = 0

    typeWriterQ('noiseQ', textArrayQ)

    function typeWriterQ(idQ, arQ) {

      var cursorElementQ = $('#' + idQ),
          stringQ = arQ[aQ],
          typeTextQ = cursorElementQ.children('p')

          typeTextQ.addClass('noiseQcursor')

      var continueElementQ = $('#' + 'continueNoiseQ'),
          toContinueQ = continueElementQ.children('p')

          toContinueQ.addClass('continueQ')

      // If text left to type in array...
      if (aQ < arQ.length) {

        // ->
        if (!isBackspacingQ) {

          // Type string.
          if (iQ < stringQ.length) {
            typeTextQ.text(typeTextQ.text() + stringQ.charAt(iQ))
            iQ++
            setTimeout(function(){ typeWriterQ(idQ, arQ) }, speedForwardQ)
          }

          // Switch to backspace mode.
          else if (iQ == stringQ.length) {

            // Press space to continue.
            toContinueQ.text('{ SPACE }')

            document.addEventListener('keyup', event => {
              if (counterQ == 0) {
                if (event.code === 'Space' && aQ < arQ.length) {
                  toContinueQ.text('')
                  isBackspacingQ = true
                  setTimeout(function(){ typeWriterQ(idQ, arQ) })
                  counterQ += 1
                  document.removeEventListener('keyup', event)
                }
              }
            })

          }

        }

        // <-
        else {

          // Backspace.
          if (typeTextQ.text().length > 0) {
            typeTextQ.text(typeTextQ.text().substring(0, typeTextQ.text().length - 1))
            setTimeout(function(){ typeWriterQ(idQ, arQ) }, speedBackspaceQ)
          }

          // Switch to next item.
          else {
            isBackspacingQ = false
            iQ = 0
            aQ = (aQ + 1)
            setTimeout(function(){ typeWriterQ(idQ, arQ) }, 50)
          }

        }

      }

      // If all text in array is printed, next sequence.
      else {

        clear('container')
        const noise_0 = new Noise_0(container)

      }

    } // typewriter

  }
}

class Noise_0 {
  constructor(container) {
    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'noiseFrame'
    container.appendChild(this._element)

    /**
     * Media.
     */

    // Noise textbox, text.

    const noiseTextBox = document.createElement('div')
    noiseTextBox.id = 'noiseTextBox'
    this._element.appendChild(noiseTextBox)

    const noiseText = document.createElement('div')
    noiseText.id = 'noiseText0'
    noiseTextBox.appendChild(noiseText)

    var noise_0 = noise_txt.split('\n')[1]
    document.getElementById('noiseText0').innerHTML = '<p>' + noise_0 + '</p>'

    // Press to continue.

    const continueBox = document.createElement('div')
    continueBox.id = 'continue0'
    this._element.appendChild(continueBox)

    const continueText = '{ ← }'
    document.getElementById('continue0').innerHTML = '<p>' + continueText + '</p>'

    var counter0 = 0

    document.addEventListener('keyup', event => {
      if (counter0 == 0) {
        if (event.keyCode === 37) {
          /**
           * Next sequence.
           */
          clear('container')
          const noise_A = new Noise_A(container)
          counter0 += 1
          document.removeEventListener('keyup', event)
        }
      }
    })

  }
}

class Noise_A {
  constructor(container) {

    // BIG TO DO: add counter to eventlistener.

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'noiseFrame'
    container.appendChild(this._element)

    // Noise GIF.
    var noiseGIF = document.createElement('img')
    noiseGIF.id = 'noiseGIF'
    noiseGIF.src = noise1_gif
    this._element.appendChild(noiseGIF)

    // Noise textbox, text, cursor.
    const noiseTextBox = document.createElement('div')
    noiseTextBox.id = 'noiseTextBox'
    this._element.appendChild(noiseTextBox)

    const noiseText = document.createElement('div')
    noiseText.id = 'noiseText'
    noiseTextBox.appendChild(noiseText)

    const cursor = document.createElement('p')
    noiseText.appendChild(cursor)

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueNoise'
    this._element.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Split text file to array.
    var textArrayNA = noise_txt.split('\n').slice(2, 7)

    /**
     * Animation.
     */

    var iNA = 0,
        aNA = 0,
        isBackspacingNA = false

    var speedForwardNA = Math.random() * (90 - 10) + 15,
        speedBackspaceNA = 3

    var counterNA = 0

    typeWriterNA('noiseText', textArrayNA)

    var meta = document.getElementById('meta').content
    meta = 1

    function typeWriterNA(idNA, arNA) {

      var cursorElementNA = $('#' + idNA),
          stringNA = arNA[aNA],
          typeTextNA = cursorElementNA.children('p')

          typeTextNA.addClass('cursor')

      var scrollingElement = (document.scrollingElement || document.body)

      var continueElementNA = $('#' + 'continueNoise'),
          toContinueNA = continueElementNA.children('p')

          toContinueNA.addClass('continueNA')

      // If text left to type in array...
      if (aNA < arNA.length) {

        // ->
        if (!isBackspacingNA) {

          // Type string.
          if (iNA < stringNA.length) {
            typeTextNA.text(typeTextNA.text() + stringNA.charAt(iNA))
            iNA++
            setTimeout(function(){ typeWriterNA(idNA, arNA) }, speedForwardNA)
            scrollingElement.scrollTop = scrollingElement.scrollHeight
          }

          // Switch to backspace mode.
          else if (iNA == stringNA.length) {

            // Press space to continue.
            toContinueNA.text('{ SPACE }')
            scrollingElement.scrollTop = scrollingElement.scrollHeight

            var counterNA = 0

            document.addEventListener('keyup', event => {
              if (counterNA == 0) {
                if (event.code === 'Space') {
                  counterNA += 1
                  toContinueNA.text('')
                  isBackspacingNA = true
                  setTimeout(function(){ typeWriterNA(idNA, arNA) })
                }
              }
            })

          }

        }

        // <-
        else {

          // Backspace.
          if (typeTextNA.text().length > 0) {
            typeTextNA.text(typeTextNA.text().substring(0, typeTextNA.text().length - 1))
            setTimeout(function(){ typeWriterNA(idNA, arNA) }, speedBackspaceNA)
          }

          // Switch to next item.
          else {
            isBackspacingNA = false
            iNA = 0
            aNA = (aNA + 1)
            setTimeout(function(){ typeWriterNA(idNA, arNA) }, 50)
          }

        }

      }

      // If all text in array is printed, next sequence.
      else {

        /**
         * Next sequence.
         */

        if (meta == 1) {

          meta += 1

          document.getElementById('noiseGIF').src = noise2_gif

          var textArrayNB = noise_txt.split('\n').slice(7, 9)

          isBackspacingNA = false
          iNA = 0
          aNA = 0
          setTimeout(function(){ typeWriterNA(idNA, textArrayNB) }, 50)
        }

        else if (meta == 2) {

          meta += 1

          document.getElementById('noiseGIF').src = noise3_gif

          var textArrayNC = noise_txt.split('\n').slice(9, 11)

          isBackspacingNA = false
          iNA = 0
          aNA = 0
          setTimeout(function(){ typeWriterNA(idNA, textArrayNC) }, 50)
        }

        else if (meta == 3) {

          /**
           * Next scene.
           */

          clear('meta')

          if (document.getElementById('mode').content == 'linear') {
            document.getElementById('scene').content = 'apotheosis'
            sequencer()
          }

          else {
            document.getElementById('scene').content = 'pythia'
            sequencer()
          }

        }

      }

    } // typewriter

  }
}

export { Noise }
