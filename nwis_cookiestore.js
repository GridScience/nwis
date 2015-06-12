/**
 * Created by MIC on 2015/6/10.
 */

var NwisCallback = require('./nwis_callback.js');

function CookieStore() {

    var __callback = new NwisCallback();

    /**
     * @interface
     * @param e
     */
    this.__proto__.onchange = __callback;

    this.__proto__.get = function(name) {
    };

    this.__proto__.getAll = function() {
        return [];
    };

    this.__proto__.remove = function(name) {
    };

    this.__proto__.set = function(name, value) {
    };

}

module.exports = CookieStore;
