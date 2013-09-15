'use strict';

require('../');

require('ansi').Cursor(process.stdout).hide();

console.log('your cursor is now hidden, press ctrl-c to interrupt the process and get your cursor back');

require('http').createServer().listen(3000);
