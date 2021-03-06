/**
 * CLOUDY LOGIC
 * Splash
 */

import '../../style/splash.scss'

import { audio, clear, sequencer } from '../Main'
import { cloudy_gif } from '../Media'

/* Any changes to SPLASH must be reproduced in LOADER. */

class Splash {
  constructor(container) {

    // Clear static Splash.

    if (process.env.NODE_ENV == 'production') {
      document.getElementById('staticSplash').style.display = 'none'
      clear('staticSplash')
    }

    /**
     * Main container.
     */

    const splashContainer = document.createElement('div')
    splashContainer.id = 'splashContainer'
    document.body.appendChild(splashContainer)

    /**
     * Splash.
     */

    const splashFrame = document.createElement('div')
    splashFrame.id = 'expoSplash'
    splashContainer.appendChild(splashFrame)

    const cloudyGIF = document.createElement('img')
    cloudyGIF.id = 'cloudyGIF'
    cloudyGIF.src = cloudy_gif
    splashFrame.appendChild(cloudyGIF)

    const titleTextBox = document.createElement('div')
    titleTextBox.id = 'titleText'
    splashFrame.appendChild(titleTextBox)

    const subTitleTextBox = document.createElement('div')
    subTitleTextBox.id = 'subTitleText'
    splashFrame.appendChild(subTitleTextBox)

    // Text

    const titleText = 'CLOUDY LOGIC'
    const subTitleText = 'A VISUAL MANIFESTO ON BIAS'

    document.getElementById('titleText').innerHTML = '<p>' + titleText + '</p>'
    document.getElementById('subTitleText').innerHTML = '<p>' + subTitleText + '</p>'

    // Buttons

    const button = document.createElement('button')
    button.id = 'button'
    splashFrame.appendChild(button)

    const buttonText = 'BEGIN'
    document.getElementById('button').innerHTML = buttonText

    /**
     * Click to continue.
     */

    var $ = require('jquery')

    document.getElementById('button').onclick = function() {

      document.getElementById('scene').content = 'intro'

      // Fade into next sequence.
      $(splashContainer).delay(3).fadeOut('slow')
      setTimeout(function(){ sequencer() }, 2100)

    }

  }
}

export { Splash }
