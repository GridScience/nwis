
var NwisCallback = require('./nwis_callback.js');

// Singleton.
function App() {

    var __callback = new NwisCallback();

    this.__proto__.argv = '';
    this.__proto__.fullArgv = '';
    this.__proto__.dataPath = '';
    this.__proto__.manifest = '';

    this.__proto__.clearCache = function() {
    };

    this.__proto__.closeAllWindows = function() {
    };

    this.__proto__.crashBrowser = function() {
    };

    this.__proto__.crashRenderer = function() {
    };

    this.__proto__.getProxyForURL = function(url) {
    };

    this.__proto__.setProxyConfig = function(config) {
    };

    this.__proto__.quit = function() {
    };

    this.__proto__.setCrashDumpDir = function(dir) {
    };

    this.__proto__.addOriginAccessWhitelistEntry = function(sourceOrigin, destinationProtocol, destinationHost, allowDestinationSubdomains) {
    };

    this.__proto__.removeOriginAccessWhitelistEntry = function (sourceOrigin, destinationProtocol, destinationHost, allowDestinationSubdomains) {
    };

    this.__proto__.registerGlobalHotKey = function(shortcut) {
    };

    this.__proto__.onopen = __callback;
    this.__proto__.onreopen = __callback;

}

module.exports = App;
