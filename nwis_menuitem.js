
var Menu = require('./nwis_menu.js');
var NwisCallback = require('./nwis_callback.js');

function MenuItem(option) {

    var menu = new Menu();
    var __callback = new NwisCallback();

    this.__proto__.type = '';
    this.__proto__.label = '';
    this.__proto__.icon = '';
    this.__proto__.iconIsTemplate = false;
    this.__proto__.tooltip = '';
    this.__proto__.checked = false;
    this.__proto__.enabled = true;
    this.__proto__.submenu = menu;
    this.__proto__.onclick = __callback;
    this.__proto__.key = '';
    this.__proto__.modifiers = '';

}

module.exports = MenuItem;
