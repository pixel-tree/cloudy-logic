/**
 * CLOUDY LOGIC
 * Loader.
 */

import '../style/splash.scss'

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
cloudyGIF.src = '../media/cloudyZ.gif'
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

const loaderText = document.createElement('p')
loaderText.id = 'loaderText'
loaderFrame.appendChild(loaderText)

loaderText.innerHTML = 'loading...'
