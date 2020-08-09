/**
 * Thanks for visiting RCA2020!
 */

import '../style/end.scss'

let $ = require('jquery')

const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)

const frame = document.createElement('div')
frame.id = 'frame'
container.appendChild(frame)

const cursor = document.createElement('p')
frame.appendChild(cursor)

let text = [
  'RCA2020 is over.',
  'Thanks for engaging with the work.',
  'To be continued soon... ^_^'
]

/**
 * Animation.
 */

let i = 0,
    a = 0,
    isBackspacing = false

let speedForward = Math.random() * (90 - 10) + 21,
    speedBackspace = 3

typeWriter('frame', text)

function typeWriter(id, ar) {

  let cursorElement = $('#' + id),
      string = ar[a],
      typeText = cursorElement.children('p')

      typeText.addClass('cursor')

  // If text in array...
  if (a < ar.length) {

    // ->
    if (!isBackspacing) {

      // Type string.
      if (i < string.length) {
        typeText.text(typeText.text() + string.charAt(i))
        i++
        setTimeout(function() { typeWriter(id, ar) }, speedForward)
      }

      // Switch to backspace mode.
      else if (i == string.length) {
        isBackspacing = true
        setTimeout(function() { typeWriter(id, ar) }, 1500)
      }

    }

    // <-
    else {

      if (typeText.text().length > 0) {
        typeText.text(typeText.text().substring(0, typeText.text().length - 1))
        setTimeout(function() { typeWriter(id, ar) }, speedBackspace)
      }

      // Switch to next item in array.
      else {
        isBackspacing = false
        i = 0
        a = (a + 1)
        setTimeout(function() { typeWriter(id, ar) }, 50)
      }

    }

  }

  // When array printed, loop back to beginning.
  else {
    a = 0
    setTimeout(function() { typeWriter(id, ar) }, 1500)
  }

}
