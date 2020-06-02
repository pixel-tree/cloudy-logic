/**
 * CLOUDY LOGIC
 * Splash
 */

 import '../style/splash.scss'

 import { cloudy_gif } from './Media'

 import domReady from 'domready'

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
splashFrame.id = 'blurSplash'
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

// Button

const button = document.createElement('button')
button.id = 'button'
splashFrame.appendChild(button)

const buttonText = 'BEGIN'

document.getElementById('button').innerHTML = buttonText

/**
 * Loader overlay.
 */

const loaderFrame = document.createElement('div')
loaderFrame.id = 'loaderFrame'
splashContainer.appendChild(loaderFrame)

const loader = document.createElement('div')
loader.id = 'loader'
loaderFrame.appendChild(loader)

const loaderText = document.createElement('p')
loaderText.id = 'loaderText'
loaderFrame.appendChild(loaderText)

loaderText.innerHTML = 'loading...'

/**
 * Lazy loader for main content.
 */

require.ensure(['./Main'], (require) => {

	domReady(() => {

    // Reveal splash.

    document.getElementById('loaderFrame').style.display = 'none'
    document.getElementById('blurSplash').setAttribute("id", "splashFrame")

    // Click to transition.

    document.getElementById('button').onclick = function() {

      var $ = require('jquery')
      $(splashFrame).delay(3).fadeOut('slow')
      setTimeout(function(){ require('./Main') }, 2100)

    }

	})

})
