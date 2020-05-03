/**
 * CLOUDY LOGIC
 * An Alternative Guide to Bias in AI
 * Scene X
 * Pythia
 */

import '../../style/pythia.scss'

import { pythia_img } from '../Media.js'

import { Terminal } from '../interface/Terminal.js'

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

    // TO DO: implement JQuery terminal and connect to DialogFlow.

    const terminal = new Terminal(container)

  }
}

export { Pythia }
