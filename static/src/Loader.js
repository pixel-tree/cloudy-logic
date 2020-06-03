/**
 * CLOUDY LOGIC
 * Loader.
 */

import '../style/splash.scss'

import { cloudy_Z } from './Media'

/* Any changes to LOADER must be reproduced in SPLASH. */

/**
 * Main container.
 */

const splashContainer = document.createElement('div')
splashContainer.id = 'staticSplash'
document.body.appendChild(splashContainer)

/**
 * Splash.
 */

const splashFrame = document.createElement('div')
splashFrame.id = 'blurSplash'
splashContainer.appendChild(splashFrame)

const cloudyGIF = document.createElement('img')
cloudyGIF.id = 'cloudyGIF'
cloudyGIF.src = cloudy_Z
splashFrame.appendChild(cloudyGIF)

const titleTextBox = document.createElement('div')
titleTextBox.id = 'zTitleText'
splashFrame.appendChild(titleTextBox)

const subTitleTextBox = document.createElement('div')
subTitleTextBox.id = 'zSubTitleText'
splashFrame.appendChild(subTitleTextBox)

// Text

const titleText = 'CLOUDY LOGIC'
const subTitleText = 'AN ALTERNATIVE GUIDE TO BIAS IN AI'

document.getElementById('zTitleText').innerHTML = '<p>' + titleText + '</p>'
document.getElementById('zSubTitleText').innerHTML = '<p>' + subTitleText + '</p>'

// Button

const button = document.createElement('button')
button.id = 'zButton'
splashFrame.appendChild(button)

const buttonText = 'BEGIN'

document.getElementById('zButton').innerHTML = buttonText

/**
 * Loader overlay.
 */

const loaderFrame = document.createElement('div')
loaderFrame.id = 'loaderFrame'
splashContainer.appendChild(loaderFrame)

const loader = document.createElement('div')
loader.id = 'loader'
loaderFrame.appendChild(loader)

const ld1 = document.createElement('div')
loader.appendChild(ld1)

const ld2 = document.createElement('div')
loader.appendChild(ld2)

const ld3 = document.createElement('div')
loader.appendChild(ld3)

const ld4 = document.createElement('div')
loader.appendChild(ld4)

var loaderText = document.createElement('p')
loaderText.id = 'loaderText'
loaderFrame.appendChild(loaderText)

var $ = require('jquery')

var URL = './build/main.bundle.js'

$.ajax({
  type: 'GET',
  dataType: 'json',
  url: URL,
  cache: false,
  xhr: function() {
    var xhr = new window.XMLHttpRequest()
    xhr.addEventListener('progress', function(event) {
      if (event.lengthComputable) {
          var perc = Math.round(event.loaded / event.total * 100)
          loaderText.innerHTML = 'loading... ' + perc + '%'
      }
    }, false)
    return xhr
  },
  beforeSend: function() {
      $('#loaderText').show()
  },
  complete: function(json) {
      $('#loaderText').html("initialising...")
  }
})
