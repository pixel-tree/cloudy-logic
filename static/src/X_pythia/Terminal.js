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
      '',
      'linear', 'Linear', 'LINEAR',
      'hubble', 'Hubble', 'HUBBLE',
      'caustics', 'Caustics', 'CAUSTICS',
      'noise', 'Noise', 'NOISE',
      'apotheosis', 'Apotheosis', 'APOTHEOSIS',
      'chaos', 'Chaos', 'CHAOS',
      'exit', 'Exit', 'EXIT'
    ]

    /**
     * Determine greeting.
     */

    const mode = document.getElementById('mode').content
    var greeting

    if (mode == 'fragmented') {
      greeting = pythia_txt.split('\n')[1] + '\n'
      // TO DO: write a greeting.
    }

    else {
      greeting = pythia_txt.split('\n')[0] + '\n'
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

          this.echo(String('\n' + messaging() + '\n'))

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
          this.echo(String('\n' + 'Good luck adventurer!' + '\n'))
          document.getElementById('mode').content = 'linear'
          document.getElementById('scene').content = 'hubble'
          setTimeout(function(){ sequencer() }, 1500)
        }

        else if (
          command == 'hubble'
          || command == 'Hubble'
          || command == 'HUBBLE'
        ) {
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'hubble'
          setTimeout(function(){ sequencer() }, 50)
        }

        else if (
          command == 'caustics'
          || command == 'Caustics'
          || command == 'CAUSTICS'
        ) {
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'caustics'
          setTimeout(function(){ sequencer() }, 50)
        }

        else if (
          command == 'noise'
          || command == 'Noise'
          || command == 'NOISE'
        ) {
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'noise'
          setTimeout(function(){ sequencer() }, 50)
        }

        else if (
          command == 'apotheosis'
          || command == 'Apotheosis'
          || command == 'APOTHEOSIS'
        ) {
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'apotheosis'
          setTimeout(function(){ sequencer() }, 50)
        }

        else if (
          command == 'chaos'
          || command == 'Chaos'
          || command == 'CHAOS'
        ) {
          document.getElementById('mode').content = 'fragmented'
          document.getElementById('scene').content = 'chaos'
          setTimeout(function(){ sequencer() }, 50)
        }

        else if (
          command == 'exit'
          || command == 'Exit'
          || command == 'EXIT'
        ) {
          setTimeout(function(){ location.reload() }, 50)
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
