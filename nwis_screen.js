
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var NwisCallback = require('./nwis_callback.js');

function Screen() {

    var __callback = new NwisCallback();

    this.__proto__.Init = function() {
    };

    this.__proto__.screens = [];

    this.__proto__.chooseDesktopMedia = function(sources, callback) {
    };

    this.__proto__.ondisplayboundschanged = __callback;
    this.__proto__.ondisplayadded = __callback;
    this.__proto__.ondisplayremoved = __callback;

}

util.inherits(Screen, EventEmitter);

module.exports = Screen;
