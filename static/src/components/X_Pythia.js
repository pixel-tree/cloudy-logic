/**
 * CLOUDY LOGIC
 * Navigation
 * Pythia (main)
 */

import '../../style/pythia.scss'

import { Terminal } from './X_Terminal'
import { pythia_img, q } from '../Media'

class Pythia {
  constructor(container) {

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'pythiaFrame'
    container.appendChild(this._element)

    // Pythia avatar.
    const pythiaImg = document.createElement('img')
    pythiaImg.id = 'pythiaImg'
    pythiaImg.src = pythia_img
    this._element.appendChild(pythiaImg)

    // Pythia textbox.

    const skip = document.createElement('div')
    skip.id = 'skip'
    this._element.appendChild(skip)

    const pythiaTextBox = document.createElement('div')
    pythiaTextBox.id = 'pythiaTextBox'
    this._element.appendChild(pythiaTextBox)

    // Create terminal.
    const terminal = new Terminal(container)

    // Skip elements.
    const skipBox = document.createElement('div')
    skipBox.id = 'skipBox'
    skip.appendChild(skipBox)

    const skipIcon = document.createElement('img')
    skipIcon.id = 'skipIcon'
    skipIcon.src = q
    skipBox.appendChild(skipIcon)

    const skipText = document.createElement('div')
    skipText.id = 'skipText'
    skipBox.appendChild(skipText)

    skipText.innerHTML =
      '<p>SKIP CHIT-CHAT</p>' +
      '<p>& ENTER SCENE:</p>' +
      '<br>' +
      '<p><i>all</i></p>' +
      '<p><i>hubble</i></p>' +
      '<p><i>caustics</i></p>' +
      '<p><i>noise</i></p>' +
      '<p><i>apotheosis</i></p>' +
      '<p><i>chaos</i></p>'

  }
}

export { Pythia }
