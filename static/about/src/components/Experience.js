/**
 * Experience page for About Cloudy Logic.
 */

import { data } from '../About'

class Experience {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    // Generate content.
    for (let i = 0; i < data.experience.length; i++) {

      // Subsection header.
      const title = document.createElement('div')
      title.classList.add('subTitle')
      title.innerText = data.experience[i].id
      content.appendChild(title)

      // Main body.
      const body = document.createElement('div')
      body.classList.add('subBody')
      content.appendChild(body)

      // Individual paragraphs.
      for (let j = 0; j < data.experience[i].body.length; j++) {
          // Text.
          const paragraph = document.createElement('p')
          paragraph.innerHTML = data.experience[i].body[j]
          body.appendChild(paragraph)
      }

      // Footnotes (if any).
      const footnotes = document.createElement('div')
      footnotes.classList.add('footnotes')
      body.appendChild(footnotes)

      if (data.experience[i].notes.length > 0) {
        for (let j = 0; j < data.experience[i].notes.length; j++) {
          const note = document.createElement('p')
          note.innerHTML = Object.keys(data.experience[i].notes[j]) + ' ' + Object.values(data.experience[i].notes[j])
          footnotes.appendChild(note)
        }
      }

      // Visual media (if any).
      if (data.experience[i].media.length > 0) {
        // Replace markers ({1}, {2}, ...) with images and descriptions.
        for (let j = 0; j < data.experience[i].media.length; j++) {
          const path = Object.values(data.experience[i].media[j])
          const alt = Object.keys(data.experience[i].media[j])
          const replacement = body.innerHTML.replace(
            '{' + (j + 1) + '}',
            '<img class="image" src="' + path + '" alt="' + alt + '">'
          )
          body.innerHTML = replacement
        }
      }

      // Links (if any).
      if (data.experience[i].links.length > 0) {
          // Replace markers ((1), (2), ...) with links and descriptions.
          for (let j = 0; j < data.experience[i].links.length; j++) {
            const link = Object.values(data.experience[i].links[j])
            const description = Object.keys(data.experience[i].links[j])
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

export { Experience }
