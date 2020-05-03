/**
 * CLOUDY LOGIC
 * An Alternative Guide to Bias in AI
 * Scene 1
 * Hubble
 */

import '../../style/hubble.scss'

import { hubble_gif, hubble_txt } from '../Media.js'

class Hubble {
  constructor(container) {

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'hubbleFrame'
    container.appendChild(this._element)

    // Hubble GIF.
    const hubbleGif = document.createElement('img')
    hubbleGif.id = 'hubbleGif'
    hubbleGif.src = hubble_gif
    this._element.appendChild(hubbleGif)

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
    continueBox.id = 'continueBox'
    this._element.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Load text file to array.
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

      var continueElement = $('#' + 'continueBox'),
          toContinue = continueElement.children('p')

          toContinue.addClass('continue')

      // ->
      if (!isBackspacing) {

        // Type string.
        if (i < string.length) {
          typeText.text(typeText.text() + string.charAt(i))
          i++
          setTimeout(function(){ typeWriter(id, ar); }, speedForward)
        }

        // Switch to backspace mode.
        else if (i == string.length) {

          // Print instruction.
          toContinue.text('{ press space to continue }')

          // Press space to continue.
          document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
              toContinue.text('')
              isBackspacing = true
              setTimeout(function(){ typeWriter(id, ar); })
            }
          })
        }

      }

      // <-
      else {

        // Backspace.
        if (typeText.text().length > 0) {
          typeText.text(typeText.text().substring(0, typeText.text().length - 1))
          setTimeout(function(){ typeWriter(id, ar); }, speedBackspace)
        }

        // Switch to next item + loop back to first.
        else {
          isBackspacing = false
          i = 0
          a = (a + 1) % ar.length
          setTimeout(function(){ typeWriter(id, ar); }, 50)
        }

      }

    }

  }
}

export { Hubble }
