/**
 * CLOUDY LOGIC
 * Scene II
 * Caustics
 */

import '../../style/caustics.scss'

import { sequencer } from '../Main'
import { c3ch, cRGB, cTxt } from '../Media'

class Caustics {
  constructor(container) {

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'cFrame'
    container.appendChild(this._element)

    /**
     * Media.
     */

    // Textbox, text, etc.
    const causticsI = document.createElement('div')
    causticsI.id = 'causticsI'
    this._element.appendChild(causticsI)

    var iText = cTxt.split('\n')[0]
    document.getElementById('causticsI').innerHTML = '<p>' + iText + '</p>'

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueI'
    this._element.appendChild(continueBox)

    const continueText = '{ ↓ }'
    document.getElementById('continueI').innerHTML = '<p>' + continueText + '</p>'

    var counter = 0

    document.addEventListener('keyup', event => {
      if (counter == 0) {
        if (event.keyCode === 40) {
          /**
           * Next sequence.
           */

          const scrollDiv = document.createElement('div')
          scrollDiv.id = 'scrollDiv'
          this._element.appendChild(scrollDiv)

          const caustics_3ch = new Caustics_3ch(container)

          var scrollingElement = (document.scrollingElement || document.body)
          scrollingElement.scrollTop = scrollingElement.scrollHeight

          counter += 1

          // Doesn't remove, hence the counter (same throughout script).
          document.removeEventListener('keyup', event)
        }
      }
    })

  }
}

class Caustics_3ch {
  constructor(container) {

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'cFrame'
    container.appendChild(this._element)

    /**
     * Media.
     */

    // 3ch GIF.
    const c3chGIF = document.createElement('img')
    c3chGIF.id = 'c3chGIF'
    c3chGIF.src = c3ch
    this._element.appendChild(c3chGIF)

    // Caustics textbox, text, cursor.
    const causticsTextBox = document.createElement('div')
    causticsTextBox.id = 'causticsTextBox'
    this._element.appendChild(causticsTextBox)

    const causticsText = document.createElement('div')
    causticsText.id = 'causticsText'
    causticsTextBox.appendChild(causticsText)

    const cursor = document.createElement('p')
    causticsText.appendChild(cursor)

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueCaustics'
    this._element.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueBox.appendChild(continueText)

    // Split text file to array.
    var textArrayCA = cTxt.split('\n').slice(1)

    /**
     * Animation.
     */

    var iCA = 0,
        aCA = 0,
        isBackspacingCA = false

    var speedForwardCA = Math.random() * (90 - 10) + 15,
        speedBackspaceCA = 3

    var counter = 0

    typeWriterCA('causticsText', textArrayCA)

    function typeWriterCA(idCA, arCA) {

      var cursorElementCA = $('#' + idCA),
          stringCA = arCA[aCA],
          typeTextCA = cursorElementCA.children('p')

          typeTextCA.addClass('cursorCaustics')

      var scrollingElement = (document.scrollingElement || document.body)

      var continueElementCA = $('#' + 'continueCaustics'),
          toContinueCA = continueElementCA.children('p')

          toContinueCA.addClass('continue')

      // If text left to type in array...
      if (aCA < arCA.length) {

        if (aCA === 1) {
          document.getElementById('causticsText').style.height = '300px'
        }

        if (aCA === 2) {
          document.getElementById('causticsText').style.height = '370px'
        }

        // ->
        if (!isBackspacingCA) {

          // Type string.
          if (iCA < stringCA.length) {
            typeTextCA.text(typeTextCA.text() + stringCA.charAt(iCA))
            iCA++
            setTimeout(function(){ typeWriterCA(idCA, arCA) }, speedForwardCA)
            scrollingElement.scrollTop = scrollingElement.scrollHeight
          }

          // Switch to backspace mode.
          else if (iCA == stringCA.length) {

            // Press space to continue.
            toContinueCA.text('{ press space to continue }')
            scrollingElement.scrollTop = scrollingElement.scrollHeight

            counter = 0

            document.addEventListener('keyup', event => {
              if (counter == 0) {
                if (event.code === 'Space' && aCA < arCA.length) {
                  toContinueCA.text('')
                  isBackspacingCA = true
                  setTimeout(function(){ typeWriterCA(idCA, arCA) })
                  counter += 1
                  document.removeEventListener('keyup', event)
                }
              }
            })

          }

        }

        // <-
        else {

          // Backspace.
          if (typeTextCA.text().length > 0) {
            typeTextCA.text(typeTextCA.text().substring(0, typeTextCA.text().length - 1))
            setTimeout(function(){ typeWriterCA(idCA, arCA) }, speedBackspaceCA)
          }

          // Switch to next item.
          else {
            isBackspacingCA = false
            iCA = 0
            aCA = (aCA + 1)
            setTimeout(function(){ typeWriterCA(idCA, arCA) }, 50)
          }

        }

      }

      // If all text in array is printed, next sequence.
      else {

        /**
         * Reformat and display previous text; hide unused elements.
         */

        document.getElementById('causticsText').style.display = 'none'
        document.getElementById('continueCaustics').style.display = 'none'

        const caustics3chL = document.createElement('div')
        caustics3chL.id = 'caustics3chL'
        causticsTextBox.appendChild(caustics3chL)

        const caustics3chR = document.createElement('div')
        caustics3chR.id = 'caustics3chR'
        causticsTextBox.appendChild(caustics3chR)

        document.getElementById('caustics3chL').innerHTML =
            '<p>C</p>' +
            '<p>A</p>' +
            '<p>U</p>' +
            '<p>S</p>' +
            '<p>T</p>' +
            '<p>I</p>' +
            '<p>C</p>' +
            '<p>S</p>'

        var reformatText = cTxt.split('\n')
        document.getElementById('caustics3chR').innerHTML =
            '<p>' + reformatText[1] + '</p>' +
            '<p>' + reformatText[2] + '</p>' +
            '<p>' + reformatText[3] + '</p>'

        /**
         * Next sequence.
         */

        const scrollDiv2 = document.createElement('div')
        scrollDiv2.id = 'scrollDiv2'
        container.appendChild(scrollDiv2)

        const caustics_RGB = new Caustics_RGB(container)

        var scrollingElement = (document.scrollingElement || document.body)
        scrollingElement.scrollTop = scrollingElement.scrollHeight

      }

    } // typewriter

  }
}

class Caustics_RGB {
  constructor(container) {

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'cFrame'
    container.appendChild(this._element)

    /**
     * Media.
     */

    // Caustic RGB GIF.
    const cRGBGIF = document.createElement('img')
    cRGBGIF.id = 'cRGBGIF'
    cRGBGIF.src = cRGB
    this._element.appendChild(cRGBGIF)

    // Press to continue.

    const continueBox = document.createElement('div')
    continueBox.id = 'continueRGB'
    this._element.appendChild(continueBox)

    const continueText = '{ → }'
    document.getElementById('continueRGB').innerHTML = '<p>' + continueText + '</p>'

    var scrollingElement = (document.scrollingElement || document.body)
    scrollingElement.scrollTop = scrollingElement.scrollHeight

    var counter = 0

    document.addEventListener('keyup', event => {
      if (counter == 0) {
        if (event.keyCode === 39) {
          /**
           * Next sequence.
           */

          if (document.getElementById('mode').content == 'linear') {
            document.getElementById('scene').content = 'noise'
            sequencer()
          }

          else {
            document.getElementById('scene').content = 'pythia'
            sequencer()
          }

          counter += 1
          document.removeEventListener('keyup', event)
        }
      }
    })

  }
}

export { Caustics }
