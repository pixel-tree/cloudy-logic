/**
 * Utilities for About Cloudy Logic.
 */

import { Intro } from './components/Intro'
import { Research } from './components/Research'
import { Experience } from './components/Experience'
import { Future } from './components/Future'
import { Reflection } from './components/Reflection'

class Nav {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    // Frame.
    this._element = document.createElement('nav')
    this._element.id = 'nav'
    container.appendChild(this._element)

    // Menu items.
    const items = [
      'introduction',
      'research',
      'experience',
      'reflection',
      'future'
    ]

    const ol = document.createElement('ol')
    ol.id = 'ol'
    this._element.appendChild(ol)

    for (let i = 0; i < items.length; i++) {

      const li = document.createElement('li')
      li.innerText = items[i]

      li.onclick = function() {
        if (document.getElementById('page').content !== this.innerHTML) {
          document.getElementById('page').content = this.innerHTML
          sequencer()
        }
      }

      ol.appendChild(li)
    }

  }
}

/*
 * Essential functions.
 */

/* Clear element */

function clear(elementID) { document.getElementById(elementID).innerHTML = '' }

/* Sequencer */

function sequencer() {

  clear('content')

  // Introduction.
  if (page.content === 'introduction') {
    new Intro(container)
  }

  // Research.
  else if (page.content === 'research') {
    new Research(container)
  }

  // Experience.
  else if (page.content === 'experience') {
    new Experience(container)
  }

  // Future.
  else if (page.content === 'future') {
    new Future(container)
  }

  // Reflection.
  else if (page.content === 'reflection') {
    new Reflection(container)
  }

}

export { Nav, sequencer }
