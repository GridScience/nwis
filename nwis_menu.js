
var MenuItem = require('./nwis_menuitem.js');
var MenuItemArray = require('./nwis_menuitemarray.js');

function Menu() {

    var __items = new MenuItemArray();

    this.__proto__.items = __items;

    this.__proto__.append = function(item) {
    };

    this.__proto__.insert = function(item, i) {
    };

    this.__proto__.remove = function(item) {
    };

    this.__proto__.removeAt = function(i) {
    };

    this.__proto__.popup = function(x, y) {
    };

    if (process.platform === 'darwin') {

        this.__proto__.createMacBuiltin = function(appname) {
        };

    }

}

module.exports = Menu;
