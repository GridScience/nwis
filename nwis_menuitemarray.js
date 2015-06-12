
var util = require('util');
var NwisCallback = require('./nwis_callback.js');

function MenuItemArray() {

    var __callback = new NwisCallback();

    /**
     * OnClick handler
     * @returns {void} 
     */
    this.__proto__.onclick = __callback;

    this.__proto__.length = 0;

}

util.inherits(MenuItemArray, Array);

module.exports = MenuItemArray;
