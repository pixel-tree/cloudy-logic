/**
 * CLOUDY LOGIC
 * Terminal interface.
 */

import '../../style/terminal.scss'

import { pythia_greeting } from '../Media.js'

class Terminal {
  constructor(container) {

/**
 *
 * TO DO: help (commands), dialogflow, errors.
 *
 *
 */

    var jQuery = require('jquery.terminal')

    jQuery(function($, undefined) {
      $('#pythiaTextBox').terminal(function(command) {
        if (command !== '') {

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
      },
      {
        name: 'Pythia',
        greetings: pythia_greeting,
        prompt: '> '
      })
    })

  }
}

export { Terminal }
