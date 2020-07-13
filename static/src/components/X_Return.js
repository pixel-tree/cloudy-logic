/**
 * CLOUDY LOGIC
 * Return (Pythia)
 */

import '../../style/pythia.scss'

import { sequencer } from '../Main'
import { back } from '../Media'

class Return {
  constructor(container) {

    // Container.
    this._element = document.createElement('div')
    this._element.id = 'returnFrame'
    container.appendChild(this._element)

    // Icon.
    const returnIcon = document.createElement('img')
    returnIcon.id = 'returnIcon'
    returnIcon.src = back
    this._element.appendChild(returnIcon)

    // On click.
    returnIcon.onclick = () => {
      // TO DO: sort out typewriter text bug to avoid having to reload.
      // setTimeout(function(){ location.reload() }, 300)
      document.getElementById('scene').content = 'pythia'
      sequencer()
    }

  }
}

export { Return }
