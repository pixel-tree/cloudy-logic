/**
 * CLOUDY LOGIC: A Visual Manifesto on Bias.
 *
 * Designed by pixel-tree;
 * RCA MA IED Design Project, 2020.
 */

import '../style/main.scss'

// import { Cursor } from './components/X_Cursor'
import { Splash } from './components/X_Splash'
import { Intro } from './components/0_Intro'
import { Pythia } from './components/X_Pythia'
import { Return } from './components/X_Return'
import { Hubble } from './components/1_Hubble'
import { Caustics } from './components/2_Caustics'
import { Noise } from './components/3_Noise'
import { Apotheosis } from './components/4_Apotheosis'
import { Butterfly } from './components/5_Chaos'

let $ = require('jquery')

/**
 * Essential metadata.
 */

let env = process.env.NODE_ENV

let mode = document.createElement('meta')
mode.id = 'mode'
document.head.appendChild(mode)

let scene = document.createElement('meta')
scene.id = 'scene'
document.head.appendChild(scene)

let meta = document.createElement('meta')
meta.id = 'meta'
document.head.appendChild(meta)

/**
 * Begin (production / dev).
 */

// Main container.
const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)
$('#container').hide()

// Cursor.
// const cursor = new Cursor()

if (env !== 'development') {

  sequencer()

} else if (env !== 'production') {

  console.log('Development mode.')

  $('#container').show()

  // Currently can't run transitions in dev;
  // to test these, build app and run with Flask.

  // new Return(container)

  // Scene under development:
  // new Pythia(container)

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

  // Intro.
  if (document.getElementById('scene').content === 'intro') {
    $('#container').show()
    const intro = new Intro(container)
  }

  // Summon Pythia. Navigation.
  if (document.getElementById('scene').content === 'pythia') {
    if (mode.content == '') {
      $('#introFrame').fadeOut(120, function() {
        clear('container')
        const pythia = new Pythia(container)
      })
    } else {
      clear('container')
      const pythia = new Pythia(container)
    }
  }

  // Scene I, II, III, etc.
  else if (document.getElementById('scene').content === 'hubble') {
    clear('container')
    const back = new Return(container)
    const hubble = new Hubble(container)
  }

  else if (document.getElementById('scene').content === 'caustics') {
    clear('container')
    const back = new Return(container)
    const caustics = new Caustics(container)
  }

  else if (document.getElementById('scene').content === 'noise') {
    clear('container')
    const back = new Return(container)
    const noise = new Noise(container)
  }

  else if (document.getElementById('scene').content === 'apotheosis') {
    clear('container')
    const back = new Return(container)
    const apotheosis = new Apotheosis(container)
  }

  else if (document.getElementById('scene').content === 'chaos') {
    clear('container')
    const back = new Return(container)
    const chaos = new Butterfly(container)
  }

}

// Audio sequencer.
// TO DO: clean conditions.

function audio() {

  let $ = require('jquery')

  // Upon first entrance to temple.
  if (mode.content == '' && scene.content == 'pythia') {
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    setTimeout(function(){ $('#temple').animate({volume: 0.1}, 12000) }, 1500)
  }

  // Fragmented narrative; back in temple.
  else if (mode.content == 'fragmented' && scene.content == 'pythia') {
    $('#amb').animate({volume: 0}, 1500)
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    $('#temple').animate({volume: 0.1}, 12000)
    setTimeout(function(){ $('#amb')[0].pause() }, 6000)
  }

  // Linear narrative; return via button.
  else if (mode.content === 'linear' && scene.content == 'pythia') {
    $('#amb').animate({volume: 0}, 1500)
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    $('#temple').animate({volume: 0.1}, 12000)
    setTimeout(function(){ $('#amb')[0].pause() }, 6000)
  }

  // Linear narrative; end of experience.
  else if (mode.content == 'linear' && scene.content == 'end') {
    $('#amb').animate({volume: 0}, 1500)
    $('#temple')[0].volume = 0
    $('#temple')[0].play()
    $('#temple').animate({volume: 0.1}, 12000)
    setTimeout(function(){ $('#amb')[0].pause() }, 6000)
  }

  // Fragmented narrative; in scene.
  else if (mode.content == 'fragmented' && scene.content != 'pythia') {
    $('#temple').animate({volume: 0}, 1500)
    $('#amb')[0].volume = 0
    $('#amb')[0].play()
    $('#amb').animate({volume: 0.1}, 18000)
    setTimeout(function(){ $('#temple')[0].pause() }, 6000)
  }

  // Linear narrative; into first scene.
  else if (mode.content == 'linear' && scene.content == 'hubble') {
    $('#temple').animate({volume: 0}, 1500)
    $('#amb')[0].volume = 0
    $('#amb')[0].play()
    $('#amb').animate({volume: 0.1}, 18000)
    setTimeout(function(){ $('#temple')[0].pause() }, 6000)
  }

}

export { audio, clear, sequencer }
