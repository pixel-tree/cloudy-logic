/**
 * CLOUDY LOGIC
 * Introduction
 */

import '../../style/intro.scss'

import { sequencer } from '../Main'
import { intro_txt } from '../Media'

class Intro {
  constructor(container) {

    // Main container.
    this._element = document.createElement('div')
    this._element.id = 'introFrame'
    container.appendChild(this._element)

    // Textbox.
    const textBox = document.createElement('div')
    textBox.id = 'introText'
    this._element.appendChild(textBox)

    // Split text file to arrays.
    let textArray = intro_txt.split('\n')

    // Append text.
    for (let i = 0; i < textArray.length; i++) {
      let text = document.createElement('p')
      text.innerText = textArray[i]
      textBox.appendChild(text)
    }

    // Press to continue.
    const continueBox = document.createElement('div')
    continueBox.id = 'continueIntro'
    this._element.appendChild(continueBox)

    const continueText = document.createElement('p')
    continueText.innerText = '{ SPACE }'
    continueBox.appendChild(continueText)

    let counter = 0

    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        if (counter == 0) {
          document.getElementById('scene').content = 'pythia'
          sequencer()
          counter += 1
          document.removeEventListener('keyup', event)
        }
      }
    })

  }
}

export { Intro }
