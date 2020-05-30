/**
 * CLOUDY LOGIC
 * Scene I
 * Hubble
 */

import '../../style/hubble.scss'

import { sequencer } from '../Main'
import { hubble_gif, hubble_txt } from '../Media'

class Hubble {
  constructor(container) {

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'hubbleFrame'
    container.appendChild(this._element)

    // Hubble GIF.
    const hubbleGIF = document.createElement('img')
    hubbleGIF.id = 'hubbleGIF'
    hubbleGIF.src = hubble_gif
    this._element.appendChild(hubbleGIF)

    // Hubble textbox, text, cursor.
    const hubbleTextBox = document.createElement('div')
    hubbleTextBox.id = 'hubbleTextBox'
    this._element.appendChild(hubbleTextBox)

    const hubbleText = document.createElement('div')
    hubbleText.id = 'hubbleText'
    hubbleTextBox.appendChild(hubbleText)

    const cursor = document.createElement('p')
    hubbleText.appendChild(cursor)

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueHubble'
    this._element.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Split text file to array.
    var textArray = hubble_txt.split('\n')

    /**
     * Animation.
     */

    var i = 0,
        a = 0,
        isBackspacing = false

    var speedForward = Math.random() * (90 - 10) + 15,
        speedBackspace = 10

    typeWriter('hubbleText', textArray)

    function typeWriter(id, ar) {

      var cursorElement = $('#' + id),
          string = ar[a],
          typeText = cursorElement.children('p')

          typeText.addClass('cursor')

      var scrollingElement = (document.scrollingElement || document.body)

      var continueElement = $('#' + 'continueHubble'),
          toContinue = continueElement.children('p')

          toContinue.addClass('continue')

      // If text left to type in array...
      if (a < ar.length) {

        // ->
        if (!isBackspacing) {

          // Type string.
          if (i < string.length) {
            typeText.text(typeText.text() + string.charAt(i))
            i++
            setTimeout(function(){ typeWriter(id, ar) }, speedForward)
            scrollingElement.scrollTop = scrollingElement.scrollHeight
          }

          // Switch to backspace mode.
          else if (i == string.length) {

            // Press space to continue.
            toContinue.text('{ press space to continue }')
            scrollingElement.scrollTop = scrollingElement.scrollHeight

            document.addEventListener('keyup', event => {
              if (event.code === 'Space' && a < ar.length) {
                toContinue.text('')
                isBackspacing = true
                setTimeout(function(){ typeWriter(id, ar) })
              }
            }, {once : true})

          }

        }

        // <-
        else {

          // Backspace.
          if (typeText.text().length > 0) {
            typeText.text(typeText.text().substring(0, typeText.text().length - 1))
            setTimeout(function(){ typeWriter(id, ar) }, speedBackspace)
          }

          // Switch to next item.
          else {
            isBackspacing = false
            i = 0
            a = (a + 1)
            setTimeout(function(){ typeWriter(id, ar) }, 50)
          }

        }

      }

      // If all text in array is printed, next scene...
      else {

        if (document.getElementById('mode').content == 'linear') {
          document.getElementById('scene').content = 'caustics'
          sequencer()
        }

        else {
          document.getElementById('scene').content = 'pythia'
          sequencer()
        }

      }

    } // typewriter

  } // constructor
} // class

export { Hubble }
