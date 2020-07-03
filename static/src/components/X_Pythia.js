/**
 * CLOUDY LOGIC
 * Navigation
 * Pythia (main)
 */

import '../../style/pythia.scss'

import { Terminal } from './X_Terminal'
import { pythia_img } from '../Media'

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
    const pythiaTextBox = document.createElement('div')
    pythiaTextBox.id = 'pythiaTextBox'
    this._element.appendChild(pythiaTextBox)

    // Terminal.
    const terminal = new Terminal(container)

  }
}

export { Pythia }
