/**
 * Introduction page for About Cloudy Logic.
 */

import { data } from '../About'

class Intro {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    // Header.
    const header = document.createElement('div')
    header.id = 'introHeader'
    header.innerText = 'about cloudy logic'
    content.appendChild(header)

    // Generate content.
    for (let i = 0; i < data.intro.length; i++) {

      // Subsection header.
      const title = document.createElement('div')
      title.classList.add('subTitle')
      title.innerText = data.intro[i].id
      content.appendChild(title)

      // Main body.
      const body = document.createElement('div')
      body.classList.add('subBody')
      content.appendChild(body)

      // Individual paragraphs.
      for (let j = 0; j < data.intro[i].body.length; j++) {
          // Text.
          const paragraph = document.createElement('p')
          paragraph.innerHTML = data.intro[i].body[j]
          body.appendChild(paragraph)
      }

      // Footnotes (if any).
      const footnotes = document.createElement('div')
      footnotes.classList.add('footnotes')
      body.appendChild(footnotes)

      if (data.intro[i].notes.length > 0) {
        for (let j = 0; j < data.intro[i].notes.length; j++) {
          const note = document.createElement('p')
          note.innerHTML = Object.keys(data.intro[i].notes[j]) + ' ' + Object.values(data.intro[i].notes[j])
          footnotes.appendChild(note)
        }
      }

      // Visual media (if any).
      if (data.intro[i].media.length > 0) {
        // Replace markers ({1}, {2}, ...) with images and descriptions.
        for (let j = 0; j < data.intro[i].media.length; j++) {
          const path = Object.values(data.intro[i].media[j])
          const alt = Object.keys(data.intro[i].media[j])
          const replacement = body.innerHTML.replace(
            '{' + (j + 1) + '}',
            '<img class="image" src="' + path + '" alt="' + alt + '">'
          )
          body.innerHTML = replacement
        }
      }

      // Links (if any).
      if (data.intro[i].links.length > 0) {
          // Replace markers ((1), (2), ...) with links and descriptions.
          for (let j = 0; j < data.intro[i].links.length; j++) {
            const link = Object.values(data.intro[i].links[j])
            const description = Object.keys(data.intro[i].links[j])
            const replacement = content.innerHTML.replace(
              '(' + (j + 1) + ')',
              '<a target="_blank" rel="noopener" href="' + link + '">' + description + '</a>'
            )
          content.innerHTML = replacement
        }
      }

    }

  }
}

export { Intro }
