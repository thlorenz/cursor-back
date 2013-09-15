'use strict';

require('../');

require('ansi').Cursor(process.stdout).hide();

console.log('Your cursor is now hidden. The program is done in 2 seconds and you\'ll  get your cursor back when it ends.');

setTimeout(console.log.bind(console, 'done'), 2000);
