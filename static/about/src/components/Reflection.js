/**
 * Reflection page for About Cloudy Logic.
 */

import { data } from '../About'

class Reflection {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    // Generate content.
    for (let i = 0; i < data.reflection.length; i++) {

      // Subsection header.
      const title = document.createElement('div')
      title.classList.add('subTitle')
      title.innerText = data.reflection[i].id
      content.appendChild(title)

      // Place heatmap (arbitrary position).
      if (i === 2) { new Heatmap(content) }

      // Main body.
      const body = document.createElement('div')
      body.classList.add('subBody')
      content.appendChild(body)

      // Individual paragraphs.
      for (let j = 0; j < data.reflection[i].body.length; j++) {
          // Text.
          const paragraph = document.createElement('p')
          paragraph.innerHTML = data.reflection[i].body[j]
          body.appendChild(paragraph)
      }

      // Footnotes (if any).
      const footnotes = document.createElement('div')
      footnotes.classList.add('footnotes')
      body.appendChild(footnotes)

      if (data.reflection[i].notes.length > 0) {
        for (let j = 0; j < data.reflection[i].notes.length; j++) {
          const note = document.createElement('p')
          note.innerHTML = Object.keys(data.reflection[i].notes[j]) + ' ' + Object.values(data.reflection[i].notes[j])
          footnotes.appendChild(note)
        }
      }

      // Visual media (if any).
      if (data.reflection[i].media.length > 0) {
        // Replace markers ({1}, {2}, ...) with images and descriptions.
        for (let j = 0; j < data.reflection[i].media.length; j++) {
          const path = Object.values(data.reflection[i].media[j])
          const alt = Object.keys(data.reflection[i].media[j])
          const replacement = body.innerHTML.replace(
            '{' + (j + 1) + '}',
            '<img class="image" src="' + path + '" alt="' + alt + '">'
          )
          body.innerHTML = replacement
        }
      }

      // TO DO: FIX HEATMAP. Link replace is breaking rectangles.

      // Links (if any).
      if (data.reflection[i].links.length > 0) {
          // Replace markers ((1), (2), ...) with links and descriptions.
          for (let j = 0; j < data.reflection[i].links.length; j++) {
            const link = Object.values(data.reflection[i].links[j])
            const description = Object.keys(data.reflection[i].links[j])
            const replacement = body.innerHTML.replace(
              '(' + (j + 1) + ')',
              '<a target="_blank" rel="noopener" href="' + link + '">' + description + '</a>'
            )
          body.innerHTML = replacement
        }
      }

    }

  }
}

class Heatmap {
  constructor(container) {

    // Main frame.
    const content = document.getElementById('content')

    const d3 = require('d3')  // alternatively d3v4.

    const heatmap = document.createElement('div')
    heatmap.id = 'heatFrame'
    content.appendChild(heatmap)

    let margin = {top: 30, right: 30, bottom: 30, left: 30},
        width = 900 - margin.left - margin.bottom,
        height = 450 - margin.top - margin.bottom

    let svg = d3.select('#heatFrame')
      .append('svg')
        .attr('id', 'heatmap')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform',
              'translate(' + margin.left + ',' + margin.top + ')')

    let sessions = []
    for (let i = 1; i <= 50; i++) { sessions.push(i) }

    let interactions = []
    for (let i = 1; i <= 24; i++) { interactions.push(i) }

    let x = d3.scaleBand()
      .range([0, width])
      .domain(sessions)
      .padding(0.03)
    svg.append('g')
      .attr('id', 'heatX')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
    svg.append('text')
      .attr('id', 'heatHeader')
      .attr('text-anchor', 'middle')
      .attr('x', width / 2)
      .attr('y', 0)
      .text('User Interactions with Pythia')
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('x', width)
      .attr('y', 15)
      .text('x = user / session')

    let y = d3.scaleBand()
      .range([height, 0])
      .domain(interactions)
      .padding(0.03)
    svg.append('g')
      .attr('id', 'heatY')
      .call(d3.axisLeft(y))
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 15)
      .style('text-anchor', 'end')
      .text('y = message no.')

    let colours = d3.scaleLinear()
      .range(['#f6f4f7', '#ac97b4'])
      .domain([1, 15])

    d3.csv('https://raw.githubusercontent.com/pixel-tree/cloudy-logic/master/static/about/media/data/pythia.csv', function(data) {

      let tooltip = d3.select('#heatFrame')
        .append('div')
        .attr('id', 'tooltip')

      let mouseover = function() {
        tooltip.style('opacity', 1)
      }

      let mousemove = function(data) {
        tooltip
          .html('message length: ' + data.value + ' characters')
      }

      let mouseleave = function() {
        tooltip.style('opacity', 0)
      }

      svg.selectAll()
        .data(data, function(data) { return data.session + ':' + data.message })
        .enter()
        .append('rect')
          .attr('x', function(data) { return x(data.session) })
          .attr('y', function(data) { return y(data.message) })
          .attr('width', x.bandwidth())
          .attr('height', y.bandwidth())
          .style('fill', function(data) { return colours(data.value) })
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseleave', mouseleave)

      })

  }
}

export { Reflection }
