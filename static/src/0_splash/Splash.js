/**
 * CLOUDY LOGIC
 * Splash
 */

import '../../style/splash.scss'

import { sequencer } from '../Main'
import { cloudy_gif } from '../Media'

class Splash {
  constructor(container) {

    var $ = require('jquery')

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'splashFrame'
    container.appendChild(this._element)

    // Splash GIF.
    const cloudyGIF = document.createElement('img')
    cloudyGIF.id = 'cloudyGIF'
    cloudyGIF.src = cloudy_gif
    this._element.appendChild(cloudyGIF)

    // Title text.
    const titleTextBox = document.createElement('div')
    titleTextBox.id = 'titleText'
    this._element.appendChild(titleTextBox)

    var titleText = 'CLOUDY LOGIC'
    document.getElementById('titleText').innerHTML = '<p>' + titleText + '</p>'

    // Subtitle text.
    const subTitleTextBox = document.createElement('div')
    subTitleTextBox.id = 'subTitleText'
    this._element.appendChild(subTitleTextBox)

    var subTitleText = 'AN ALTERNATIVE GUIDE TO BIAS IN AI'
    document.getElementById('subTitleText').innerHTML = '<p>' + subTitleText + '</p>'

    // Button.
    const button = document.createElement('button')
    button.id = 'button'
    subTitleTextBox.appendChild(button)

    var buttonText = 'BEGIN'
    document.getElementById('button').innerHTML = buttonText

    // Click to continue.
    document.getElementById('button').onclick = function() {

      /*
       * Transition to first scene.
       */

      document.getElementById('scene').content = 'pythia'

      $(container).delay(3).fadeOut('slow')
      setTimeout(function(){ sequencer() }, 2100)

    }

  }
}

export { Splash }
