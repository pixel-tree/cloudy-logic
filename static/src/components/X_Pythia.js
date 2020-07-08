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
    const pythiaTextBox = document.createElement('div')
    pythiaTextBox.id = 'pythiaTextBox'
    this._element.appendChild(pythiaTextBox)

    // Terminal.
    const terminal = new Terminal(container)

    // Hint box.
    const hintBox = document.createElement('div')
    hintBox.id = 'hintBox'
    pythiaTextBox.appendChild(hintBox)

    const hintIcon = document.createElement('img')
    hintIcon.id = 'hintIcon'
    hintIcon.src = q
    hintBox.appendChild(hintIcon)

    const hintText = document.createElement('div')
    hintText.id = 'hintText'
    hintBox.appendChild(hintText)

    hintText.innerHTML =
      '<p>SKIP CHIT-CHAT</p>' +
      '<p>& ENTER SCENE:</p>' +
      '<br>' +
      '<p><i>all</i></p>' +
      '<p><i>hubble</i></p>' +
      '<p><i>caustics</i></p>' +
      '<p><i>noise</i></p>' +
      '<p><i>apotheosis</i></p>' +
      '<p><i>chaos</i></p>'

/*
    // Skip chit-chat.
    const skip = document.createElement('div')
    skip.id = 'skip'
    this._element.appendChild(skip)

    skip.innerHTML =
      '<p>' +
      '{ To skip the chit-chat enter: ' +
      '<i>linear</i> [all], ' +
      '<i>hubble</i>, ' +
      '<i>caustics</i>, ' +
      '<i>noise</i>, ' +
      '<i>apotheosis</i>, ' +
      '<i>chaos</i>. }' +
      '</p>'
*/
  }
}

export { Pythia }
