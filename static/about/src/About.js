/**
 * About Cloudy Logic.
 * A stand-alone site for information about the project.
 */

import '../style/about.scss'

import { Nav, sequencer } from './Utils'

/* Metadata */

let env = process.env.NODE_ENV

let page = document.createElement('meta')
page.id = 'page'
document.head.appendChild(page)

page.content = 'reflection' // Default load page

/* Load data */

const data = require('../media/data/data.json')

/* Main frame */

const container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)

/* Shared elements */

const cloudyLink = document.createElement('a')
cloudyLink.setAttribute('href', 'https://cloudylogic.space')
cloudyLink.setAttribute('target', '_blank')
cloudyLink.setAttribute('rel', 'noopener')
cloudyLink.id = 'cloudyLink'
cloudyLink.innerText = 'Cloudy Logic ✨'
container.appendChild(cloudyLink)

const navigation = new Nav(container)

const content = document.createElement('div')
content.id = 'content'
container.appendChild(content)

const footer = document.createElement('a')
footer.setAttribute('href', 'https://github.com/pixel-tree/cloudy-logic/blob/master/LICENSE')
footer.setAttribute('target', '_blank')
footer.setAttribute('rel', 'noopener')
footer.id = 'footer'
footer.innerText = 'Copyright © 2020 pixel-tree (MIT)'
container.appendChild(footer)

/* Initialise */

if (env === 'development') {

  console.log('Development mode.')

  // TO DO: troubleshoot file loading for dev server.
  require('../media/visual/placeholder.jpg')

  sequencer()

} else {

  sequencer()

}

export { data }
