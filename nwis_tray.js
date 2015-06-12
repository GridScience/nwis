
var Menu = require('./nwis_menu.js');
var NwisCallback = require('./nwis_callback.js');

function Tray(options) {

    var __menu = new Menu();
    var __callback = new NwisCallback();

    this.__proto__.title = '';
    this.__proto__.tooltip = '';
    this.__proto__.icon = '';
    this.__proto__.alticon = '';
    this.__proto__.iconsAreTemplates = false;
    this.__proto__.menu = __menu;

    this.__proto__.remove = function() {
    };

    this.onclick = __callback;

}

module.exports = Tray;
