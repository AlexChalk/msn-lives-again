require('babel-register')(); 

const jsdom = require('jsdom');
const doc = new jsdom.JSDOM('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = doc.window;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
