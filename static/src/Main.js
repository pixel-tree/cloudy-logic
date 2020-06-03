/**
 * CLOUDY LOGIC: An Alternative Guide to Bias in AI.
 *
 * Designed by pixel-tree;
 * RCA MA IED Design Project, 2020.
 */

import '../style/main.scss'

import { Splash } from './0_splash/Splash'
import { Pythia } from './X_pythia/Pythia'
import { Hubble } from './1_hubble/Hubble'
import { Caustics } from './2_caustics/Caustics'
import { Noise } from './3_noise/Noise'
import { Apotheosis } from './4_apotheosis/Apotheosis'
import { Chaos } from './5_chaos/Chaos'

// Dev notification.
if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode.')
}

/**
 * Metadata for sequencing scenes.
 */

var mode = document.createElement('meta')
mode.id = 'mode'
document.head.appendChild(mode)

var scene = document.createElement('meta')
scene.id = 'scene'
document.head.appendChild(scene)

var meta = document.createElement('meta')
meta.id = 'meta'
document.head.appendChild(meta)

/**
 * Begin (comment for dev).
 */

sequencer()

/**
 * Utilities.
 */

// Request full screen.
function fullScreen() {

  var confirmation = confirm("recommended: full screen");
  var site = document.documentElement;

  if (confirmation == true) {
    if (site.requestFullscreen) {
      site.requestFullscreen()
    }
    // Firefox.
    else if (site.mozRequestFullScreen) {
      site.mozRequestFullScreen()
    }
    // Chrome, Safari, Opera.
    else if (site.webkitRequestFullScreen) {
      site.webkitRequestFullScreen()
    }
    // IE/Edge.
    else if (site.msRequestFullscreen) {
      site.msRequestFullscreen()
    }
  }

}

// Clears chosen element.
function clear(elementID) {
  document.getElementById(elementID).innerHTML = ''
}

// Checks which sequence to run.
function sequencer() {

  // Splash.
  if (document.getElementById('scene').content === '') {
    const splash = new Splash()
  }

  // Navigation.
  if (document.getElementById('scene').content === 'pythia') {

    const container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container)

    const pythia = new Pythia(container)
  }

  // Scene I, II, III, etc.
  else if (document.getElementById('scene').content === 'hubble') {
    clear('container')
    const hubble = new Hubble(container)
  }

  else if (document.getElementById('scene').content === 'caustics') {
    clear('container')
    const caustics = new Caustics(container)
  }

  else if (document.getElementById('scene').content === 'noise') {
    clear('container')
    const noise = new Noise(container)
  }

  else if (document.getElementById('scene').content === 'apotheosis') {
    clear('container')
    const apotheosis = new Apotheosis(container)
  }

  else if (document.getElementById('scene').content === 'chaos') {
    clear('container')
    const chaos = new Chaos(container)
  }

}

/**
 * Dev section.
 */

// const chaos = new Chaos(container)

/* --------- */

export { clear, sequencer }

/**
 * TO DO (in order of importance):
 *
 * Fix mistype bug, last sequence of Noise.
 * Full screen request before Pythia => onclick? => deal with system sounds problem.
 * Test linear mode.
 * Make sure Pythia instructions are as clear as they can be.
 * Loader: execute ajax only on first load (skip at refresh).
 * Favico (black borders).
 * Clean up scripts.
 */

/*
 * OUTRO IDEA
 * "The weird and wonderful world of neural networks and mathematics..."
 * Lucid visualisation.
 * To be continued...
 */


/*
document.addEventListener('keyup', event => {
  fullScreen()
}, {once : true})
*/
