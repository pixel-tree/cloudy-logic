/**
 * CLOUDY LOGIC
 * Splash
 */

import '../../style/splash.scss'

import { audio, clear, sequencer } from '../Main'
import { cloudy_gif, drone, jh } from '../Media'

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
    const subTitleText = 'AN ALTERNATIVE GUIDE TO BIAS IN AI'

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

      document.getElementById('scene').content = 'pythia'

      // Fade into next sequence.
      $(splashFrame).delay(3).fadeOut('slow')
      setTimeout(function(){ sequencer() }, 2100)

      // Create audio objects and launch sequencer.
      const temple = document.createElement('audio'),
            amb = document.createElement('audio')

      temple.id = 'temple'
      temple.src = jh
      temple.type = 'audio/mpeg'
      temple.loop = true
      document.body.appendChild(temple)

      amb.id = 'amb'
      amb.src = drone
      amb.type = 'audio/mpeg'
      amb.loop = true
      document.body.appendChild(amb)

      audio()

    }

  }
}

export { Splash }
