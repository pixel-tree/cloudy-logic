/**
 * CLOUDY LOGIC
 * Loader.
 */

import '../style/splash.scss'

import { cloudy_Z, hints_txt } from './Media'

/* Any changes to LOADER must be reproduced in SPLASH. */

var $ = require('jquery')

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

// Text.

const titleText = 'CLOUDY LOGIC'
const subTitleText = 'A VISUAL MANIFESTO ON BIAS'

document.getElementById('zTitleText').innerHTML = '<p>' + titleText + '</p>'
document.getElementById('zSubTitleText').innerHTML = '<p>' + subTitleText + '</p>'

// Button.

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

// Spinner.

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

// Text.

var loaderText = document.createElement('p')
loaderText.id = 'loaderText'
loaderFrame.appendChild(loaderText)

// Display progress.

var URL = './build/main.bundle.js'

$.ajax({
  type: 'GET',
  dataType: 'script',
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
  success: function() {
    // Notify.
    $('#loaderText').html("initialising...")
  }
})

/**
 * Hints section.
 */

const hintBox = document.createElement('div')
hintBox.id = 'hintBox'
staticSplash.insertBefore(hintBox, blurSplash)

const hintText = document.createElement('p')
hintText.id = 'hintText'
hintBox.appendChild(hintText)

const hintPress = document.createElement('p')
hintPress.id = 'hintPress'
hintBox.appendChild(hintPress)

const hints = hints_txt.split('\n')

var i = 0

$('#hintText:hidden').text(hints[i]).fadeIn(1500, function() {
  $('#hintPress').text('{ press space to continue }')
})

fadeHint()

function fadeHint() {
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      $('#hintPress').hide()
      $('#hintText').fadeOut(600, function() {
        i++
        if (i < hints.length) {
          $('#hintText').text(hints[i])
        }
        else {
          i = 2
          $('#hintText').text(hints[i])
        }
        $('#hintText').fadeIn(300)
      })
    }
    fadeHint()
  }, {once: true})
}
