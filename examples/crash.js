'use strict';

require('../');
var fs = require('fs');

require('ansi').Cursor(process.stdout).hide();

console.log('Your cursor is now hidden. The program will crash in 2 seconds and you\'ll  get your cursor back when it ends.');

function crash () {
  function tryToReadAllEntries (cb) {
    fs.readdir(__dirname, function (err, res) {
      if (err) return console.error(err);
      console.log('read all these entries', res);
      console.log('Cannot handle that --- crash');
      throw new Error('AAHHHHHHHHH!!!');
    });
  }
  tryToReadAllEntries(function (err, res) {
    console.log('will never get here');  
  });
}

setTimeout(crash, 2000);
