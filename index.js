'use strict';
var ansi = require('ansi');

function showCursor (exit) {
  ansi.Cursor(process.stdout).show();
  if (exit) process.exit();
}

process.once('exit', showCursor);
process.once('uncaughtException', showCursor);
process.once('SIGINT', showCursor.bind(null, true));
