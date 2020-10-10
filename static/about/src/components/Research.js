/**
 * Research page for About Cloudy Logic.
 */

import { data } from '../About'

class Research {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    new Dendrogram(content)
    new Tree(content)

    // Generate content.
    for (let i = 0; i < data.research.length; i++) {

      // Subsection header.
      const title = document.createElement('div')
      title.classList.add('subTitle')
      title.innerText = data.research[i].id
      content.appendChild(title)

      // Main body.
      const body = document.createElement('div')
      body.classList.add('subBody')
      content.appendChild(body)

      // Individual paragraphs.
      for (let j = 0; j < data.research[i].body.length; j++) {
          // Text.
          const paragraph = document.createElement('p')
          paragraph.innerHTML = data.research[i].body[j]
          body.appendChild(paragraph)
      }

      // Footnotes (if any).
      const footnotes = document.createElement('div')
      footnotes.classList.add('footnotes')
      body.appendChild(footnotes)

      if (data.research[i].notes.length > 0) {
        for (let j = 0; j < data.research[i].notes.length; j++) {
          const note = document.createElement('p')
          note.innerHTML = Object.keys(data.research[i].notes[j]) + ' ' + Object.values(data.research[i].notes[j])
          footnotes.appendChild(note)
        }
      }

      // Visual media (if any).
      if (data.research[i].media.length > 0) {
        // Replace markers ({1}, {2}, ...) with images and descriptions.
        for (let j = 0; j < data.research[i].media.length; j++) {
          const path = Object.values(data.research[i].media[j])
          const alt = Object.keys(data.research[i].media[j])
          const replacement = body.innerHTML.replace(
            '{' + (j + 1) + '}',
            '<img class="image" src="' + path + '" alt="' + alt + '">'
          )
          body.innerHTML = replacement
        }
      }

      // Links (if any).
      if (data.research[i].links.length > 0) {
          // Replace markers ((1), (2), ...) with links and descriptions.
          for (let j = 0; j < data.research[i].links.length; j++) {
            const link = Object.values(data.research[i].links[j])
            const description = Object.keys(data.research[i].links[j])
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

class Dendrogram {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    const d3 = require('d3')

    const dendrogram = document.createElement('div')
    dendrogram.id = 'dendrogram'
    content.appendChild(dendrogram)

    let width = 450,
        height = 450,
        radius = width / 2

    let svg = d3.select('#dendrogram')
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('id', 'chart')
        .attr('transform', 'translate(' + radius + ',' + radius + ')')

    d3.json('https://raw.githubusercontent.com/pixel-tree/cloudy-logic/master/static/about/media/data/bias.json', function(d) {

      let dendrolabel = d3.select('#dendrogram')
        .append('div')
        .attr('id', 'dendrolabel')

      let mouseover = function() {
        dendrolabel.style('opacity', 0.95)
      }

      let mousemove = function(d) {
        dendrolabel
        .html('<p id="biasName">' + d.data.name + '</p>' +
              '<p id="biasText">' + d.data.description + '</p>')
        .style('left', (d3.event.pageX + 30) + 'px')
        .style('top', (d3.event.pageY) + 'px')
      }

      let mouseleave = function() {
        dendrolabel.style('opacity', 0)
      }

      let cluster = d3.cluster()
        .size([360, radius - 45])

      let root = cluster(d3.hierarchy(d)
        .sort(function(a, b) { return d3.ascending(a.data.name, b.data.name) }))

      let linksGenerator = d3.linkRadial()
        .angle(function(d) { return d.x / 180 * Math.PI })
        .radius(function(d) { return d.y })

      d3.select('#chart')
        .selectAll('path')
          .data(root.links())
          .enter()
          .append('path')
            .attr('d', linksGenerator)
            .style('fill', 'none')
            .attr('stroke', '#a9a9a9')

      d3.select('#chart')
        .selectAll('g')
          .data(root.descendants())
          .enter()
          .append('g')
            .attr('transform', function(d) {
              return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')'
            })
          .append('circle')
            .attr('r', 7)
            .style('fill', '#ac97b4')
            .style('stroke', 'black')
            .style('stroke-width', 1)
          .on('mouseover', mouseover)
          .on('mousemove', mousemove)
          .on('mouseleave', mouseleave)

    })

  }
}

class Tree {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    const d3 = require('d3')

    const frame = document.createElement('div')
    frame.id = 'treemap'
    content.appendChild(frame)

    let width = 900,
        height = 450

    let svg = d3.select('#treemap')
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('id', 'tree')
        .attr('transform', 'translate(40, 0)')

    d3.json('https://raw.githubusercontent.com/pixel-tree/cloudy-logic/master/static/about/media/data/ml.json', function(d) {

      let root = d3.hierarchy(d)
        .sort(function(a, b) { return d3.ascending(a.data.text, b.data.text) })

      let tree = d3.tree()
        .size([height, width - 195])

      d3.select('#tree')
        .selectAll('path')
          .data(tree(root).links())
          .enter()
          .append('path')
            .attr('d', d3.linkHorizontal()
              .x(function(d) { return d.y })
              .y(function(d) { return d.x }))
            .style('fill', 'none')
            .attr('stroke', '#a9a9a9')

      let node = d3.select('#tree')
        .selectAll('g')
          .data(root.descendants())
          .enter()
          .append('g')
            .attr('transform', function(d) {
              return 'translate(' + d.y + ',' + d.x + ')'
            })

      node.append('circle')
        .attr('r', 3)
        .style('fill', '#ac97b4')
        .style('stroke', 'black')
        .style('stroke-width', 1)

      node.append('text')
        .attr('dy', 3)
        .attr('x', function(d) { console.log(d.depth)
          return d.depth < 3 ? -9 : 9 })
        .style('text-anchor', function(d) {
          return d.depth < 3 ? 'end' : 'start'
        })
        .text(function(d) { return d.data.text })

    })

  }
}

export { Research }
