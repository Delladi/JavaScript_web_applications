// Import the jsdom package
const jsdom = require('jsdom');

// Create a simulated DOM environment
const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');

// Set the global variables (such as document and window) from the simulated DOM
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
