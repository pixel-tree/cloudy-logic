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
import { Butterfly } from './5_chaos/Chaos'

/**
 * Essential metadata.
 */

var env = process.env.NODE_ENV

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
 * Begin (by default ignored in dev; for which dedicated section at bottom).
 */

if (env !== 'development') {
  sequencer()
}

/**
 * Utilities.
 */

// Clear element.

function clear(elementID) {
  document.getElementById(elementID).innerHTML = ''
}

// Visual sequencer (for scenes).

function sequencer() {

  // Play sound.
  if (mode.content != '') {
    audio()
  }

  // Splash.
  if (document.getElementById('scene').content === '') {
    const splash = new Splash()
  }

  // Enter temple. Prelude/navigation.
  if (document.getElementById('scene').content === 'pythia') {

    // Main container (created once; shared across scenes).
    if (mode.content == '') {
      const container = document.createElement('div')
      container.id = 'container'
      document.body.appendChild(container)
    }

    else if (mode.content != '') {
      clear('container')
    }

    // Summon Pythia.
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
    const chaos = new Butterfly(container)
  }

}

// Audio sequencer.

function audio() {

  var $ = require('jquery')

  // Upon first entrance to temple.
  if (mode.content == '' && scene.content == 'pythia') {
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    $('#temple').animate({volume: 0.03}, 12000)
  }

  // Fragmented narrative; back in temple.
  else if (mode.content == 'fragmented' && scene.content == 'pythia') {
    $('#amb').animate({volume: 0}, 1500)
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    $('#temple').animate({volume: 0.03}, 12000)
    setTimeout(function(){ $('#amb')[0].pause() }, 6000)
  }

  // Linear narrative; back in temple.
  else if (mode.content == 'linear' && scene.content == 'end') {
    $('#amb').animate({volume: 0}, 1500)
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    $('#temple').animate({volume: 0.03}, 12000)
    setTimeout(function(){ $('#amb')[0].pause() }, 6000)
  }

  // Fragmented narrative; in scene.
  else if (mode.content == 'fragmented' && scene.content != 'pythia') {
    $('#temple').animate({volume: 0}, 1500)
    $('#amb')[0].volume = 0
    $('#amb')[0].play()
    $('#amb').animate({volume: 0.03}, 18000)
    setTimeout(function(){ $('#temple')[0].pause() }, 6000)
  }

  // Linear narrative; into first scene.
  else if (mode.content == 'linear' && scene.content == 'hubble') {
    $('#temple').animate({volume: 0}, 1500)
    $('#amb')[0].volume = 0
    $('#amb')[0].play()
    $('#amb').animate({volume: 0.03}, 18000)
    setTimeout(function(){ $('#temple')[0].pause() }, 6000)
  }

}

/**
 * Dev section (by default ignored in production).
 */

if (env !== 'production') {

  console.log('Development mode.')

  const container = document.createElement('div')
  container.id = 'container'
  document.body.appendChild(container)

  // Scene under development.
  const chaos = new Chaos(container)

}

/* -------------------------------------------- */

export { audio, clear, sequencer }

/**
 * TO DO (in order of importance):
 *
 * Oliver notes.
 * Pythia instructions.
 * Pythia fragmented multiple contexts.
 * Regl test (screen resolution? os?)
 * Loader: execute ajax only on first load (skip at refresh).
 * Clean up scripts.
 */

/*
 * OUTRO IDEA
 * "The weird and wonderful world of neural networks and mathematics..."
 * Lucid visualisation.
 * To be continued...
 */
