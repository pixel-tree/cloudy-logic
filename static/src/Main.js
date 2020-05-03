/**
 * Main.JS for CLOUDY LOGIC: An Alternative Guide to Bias in AI.
 *
 * Designed by pixel-tree;
 * RCA MA IED Design Project, 2020.
 */

import '../style/main.scss'

import { Hubble } from './graphics/Hubble'
import { Pythia } from './graphics/Pythia'
import { Particles } from './graphics/Particles'

// Greeting if running on dev server.
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

// Main container.
const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)

// Hubble.
// const hubble = new Hubble(container)

// Pythia.
const pythia = new Pythia(container)

// const particles = new Particles(container)
