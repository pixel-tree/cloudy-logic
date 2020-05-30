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

// Dev server notification.
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

// Main container.
const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)

/**
 * Begin (comment sequencer function for dev).
 */

// sequencer()

/**
 * Essential functions.
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

  // Splash
  if (document.getElementById('scene').content === '') {
    const splash = new Splash(container)
  }

  // Navigation tool.
  if (document.getElementById('scene').content === 'pythia') {
    document.getElementById('container').removeAttribute('style')
    clear('container')
    const pythia = new Pythia(container)
  }

  // Scene I, II, III, etc.
  else if (document.getElementById('scene').content === 'hubble') {
    document.getElementById('container').removeAttribute('style')
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

const chaos = new Chaos(container)

/* --------- */

export { clear, sequencer }

/*
 * OUTRO IDEA
 * "The weird and wonderful world of neural networks and mathematics..."
 * Lucid visualisation.
 */

// BIG TO DO: change typewriter variables from caustics ->.

// TO DO: random welcome backs Pythia rows 2-10.

// BIG TO DO: sort out misclicks eventlistener
// (try removeEventListener inside function)

// BIG TO DO: at the end of each script...
// if (mode.content === 'linear') { next sequence }
// else if (mode.content === 'fragemented') { back to pythia }
// BUT IF returning to pythia => different welcome message
// ... if (mode.content === 'fragmented') { greeting: welcome back... etc... }
// ... else { regular greeting }

// BIG TO DO: make sure that pythia instructions are clear.

// TO DO: clean up scripts.

// TO DO: make sure that full screen request comes before beginning.
// TO DO: disable system sounds (unexpected sound on space)?

/*
document.addEventListener('keyup', event => {
  fullScreen()
}, {once : true})
*/
