/**
 * CLOUDY LOGIC
 * Navigation
 * Pythia (interface)
 */

import '../../style/terminal.scss'

import { sequencer } from '../Main'
import { pythia_txt } from '../Media'

/**
 * TO DO: help command, errors, training, etc.
 */

class Terminal {
  constructor(container) {

    /*
     * Array of commands.
     */

    const forbidden = [
      '', 'test',
      'linear', 'Linear', 'LINEAR',
      'hubble', 'Hubble', 'HUBBLE',
      'caustics', 'Caustics', 'CAUSTICS',
      'noise', 'Noise', 'NOISE',
      'apotheosis', 'Apotheosis', 'APOTHEOSIS',
      'chaos', 'Chaos', 'CHAOS',
      'no', 'No', 'NO',
      'nope', 'Nope', 'NOPE',
      'exit', 'Exit', 'EXIT'
    ]

    const farewell = [
      'Farewell, traveller!', 'All the best for your travels, pilgrim...',
      'Until we meet again, stranger.', 'Take care, pilgrim.',
      'Goodbye for now, traveller.', 'May the stars be with you, adventurer.'
    ]

    var random = Math.floor(Math.random() * 6)

    const testString = 'String for dev and test.'

    /**
     * Determine greeting.
     */

    const mode = document.getElementById('mode').content

    var greeting

    // First encounter.
    if (mode != 'fragmented' && mode != 'end') {
      greeting = '[[b;;]' + pythia_txt.split('\n')[0] + ']' + '\n'
    }

    // I've been expecting you to return...
    else if (mode == 'fragmented') {
      greeting = '[[b;;]' + pythia_txt.split('\n')[1] + ']' + '\n'
    }

    // End.
    else if (mode == 'end') {
      greeting = '[[b;;]' + pythia_txt.split('\n')[2] + ']' + '\n'
    }

    /**
     * Terminal.
     */

    var jQuery = require('jquery.terminal')

    jQuery(function($, undefined) {
      $('#pythiaTextBox').terminal(function(command) {

        // If command not forbidden.
        if (!forbidden.includes(command)) {

          /**
           * Option no. 1 (freeze on submission).
           */

          function messaging() {

            var dialogflow

            $.ajax( {
              async: false,
              url: '/send_message',
              type: 'POST',
              data: command
              }).done(function(data) {
                dialogflow = data.message
            })

            return dialogflow

          }

          this.echo(String('\n' + '[[b;;]' + messaging() + ']' + '\n'), {keepWords: true})

          /**
           * Option no. 2 (continue to next line before response).
           */
/*
           $.ajax( {
             url: '/send_message',
             type: 'POST',
             data: command,
             success: function(data) {
               $('.terminal-output').append('<p>' + data.message + '</p>')
             }
           })
*/

        }

        /**
         * Sequencing tool.
         * TO DO: replace ||s => if (command in forbidden array 1-3).
         */

        if (
          command == 'linear'
          || command == 'Linear'
          || command == 'LINEAR'
        ) {
          this.echo(String('\n' + '[[b;;]' + 'May the stars be with you, adventurer!' + ']' + '\n'))
          document.getElementById('mode').content = 'linear'
          document.getElementById('scene').content = 'hubble'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'hubble'
          || command == 'Hubble'
          || command == 'HUBBLE'
        ) {
          this.echo(String('\n' + '[[b;;]' + farewell[random] + ']' + '\n'))
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'hubble'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'caustics'
          || command == 'Caustics'
          || command == 'CAUSTICS'
        ) {
          this.echo(String('\n' + '[[b;;]' + farewell[random] + ']' + '\n'))
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'caustics'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'noise'
          || command == 'Noise'
          || command == 'NOISE'
        ) {
          this.echo(String('\n' + '[[b;;]' + farewell[random] + ']' + '\n'))
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'noise'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'apotheosis'
          || command == 'Apotheosis'
          || command == 'APOTHEOSIS'
        ) {
          this.echo(String('\n' + '[[b;;]' + farewell[random] + ']' + '\n'))
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'apotheosis'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'chaos'
          || command == 'Chaos'
          || command == 'CHAOS'
        ) {
          this.echo(String('\n' + '[[b;;]' + farewell[random] + ']' + '\n'))
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'chaos'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'exit'
          || command == 'Exit'
          || command == 'EXIT'
          || command == 'no'
          || command == 'No'
          || command == 'NO'
          || command == 'nope'
          || command == 'Nope'
          || command == 'NOPE'
        ) {
          setTimeout(function(){ location.reload() }, 300)
        }

      },
      {
        name: 'Pythia',
        greetings: greeting,
        prompt: '> '
      })
    })

  }
}

export { Terminal }
