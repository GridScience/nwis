/**
 * Created by MIC on 2015/6/10.
 */

var util = require("util");
var EventEmitter = require('events').EventEmitter;
var cookiestore = require("./nwis_cookiestore");

/**
 * Intends to return the native window.
 */
function WindowNative() {
    
    this.__proto__.getWindow = function () {
        //return window;
    }

}

function Window() {
    
    var wn = new WindowNative();
    
    this.__proto__.get = function (window_object) {
    };
    
    this.__proto__.open = function (url, options) {
    };
    
    this.__proto__.window = (function () {
        return wn.getWindow();
    })();
    
    this.__proto__.x = 0;
    this.__proto__.y = 0;
    this.__proto__.width = 0;
    this.__proto__.height = 0;
    
    this.__proto__.title = '';
    
    this.__proto__.isFullscreen = false;
    this.__proto__.isTransparent = false;
    this.__proto__.isKioskMode = false;
    this.__proto__.zoomLevel = 0;
    
    /**
     * Move to somewhere
     * @param {Number} x 
     * @param {Number} y [Optional]
     * @returns {void} 
     */
    this.__proto__.moveTo = function (x, y) {
    };
    
    /**
     * 
     * @param {} x 
     * @param {} y 
     * @returns {} 
     */
    this.__proto__.moveBy = function (x, y) {
    };
    
    this.__proto__.resizeTo = function (width, height) {
    };
    
    this.__proto__.resizeBy = function (width, height) {
    };
    
    this.__proto__.focus = function () {
    };
    
    this.__proto__.blur = function () {
    };
    
    this.__proto__.show = function () {
    };
    
    this.__proto__.hide = function () {
    };
    
    this.__proto__.close = function (force) {
    };
    
    this.__proto__.reload = function () {
    };
    
    this.__proto__.reloadDev = function () {
    };
    
    this.__proto__.reloadIgnoringCache = function () {
    };
    
    this.__proto__.maximize = function () {
    };
    
    this.__proto__.unmaximize = function () {
    };
    
    this.__proto__.minimize = function () {
    };
    
    this.__proto__.restore = function () {
    };
    
    this.__proto__.enterFullscreen = function () {
    };
    
    this.__proto__.leaveFullscreen = function () {
    };
    
    this.__proto__.toggleFullscreen = function () {
    };
    
    this.__proto__.enterKioskMode = function () {
    };
    
    this.__proto__.leaveKioskMode = function () {
    };
    
    this.__proto__.toggleKioskMode = function () {
    };
    
    this.__proto__.setTransparent = function (transparent) {
    };
    
    this.__proto__.showDevTools = function (iframeID, headless) {
    };
    
    this.__proto__.closeDevTools = function () {
    };
    
    this.__proto__.isDevToolsOpen = function () {
    };
    
    this.__proto__.setMaximumSize = function (width, height) {
    };
    
    this.__proto__.setMinimumSize = function (width, height) {
    };
    
    this.__proto__.setResizable = function (resizable) {
    };
    
    this.__proto__.setAlwaysOnTop = function (top) {
    };
    
    this.__proto__.setVisibleOnAllWorkspaces = function (visible) {
    };
    
    this.__proto__.canSetVisibleOnAllWorkspaces = function () {
        return true;
    };
    
    this.__proto__.setPosition = function (position) {
    };
    
    this.__proto__.setShowInTaskbar = function (show) {
    };
    
    this.__proto__.requestAttention = function (attention) {
    };
    
    this.__proto__.capturePage = function (callback, image_format) {
    };
    
    this.__proto__.setProgressbar = function (progress) {
    };
    
    this.__proto__.setBadgeLabel = function (label) {
    };
    
    this.__proto__.cookies = new cookiestore();
    
    this.__proto__.eval = function (frame, script) {
    };
    
    this.__proto__.evalNWBin = function (frame, path) {
    };
    
    // Events
    
    this.__proto__.onclose = function (e) {
    };
    
    this.__proto__.onclosed = function (e) {
    };
    
    this.__proto__.onloading = function (e) {
    };
    
    this.__proto__.onloaded = function (e) {
    };
    
    this.__proto__.ondocumentstart = function (e) {
    };
    
    this.__proto__.ondocumentend = function (e) {
    };
    
    this.__proto__.onfocuse = function (e) {
    };
    
    this.__proto__.onblur = function (e) {
    };
    
    this.__proto__.onminimize = function (e) {
    };
    
    this.__proto__.onrestore = function (e) {
    };
    
    this.__proto__.onmaximize = function (e) {
    };
    
    this.__proto__.onunmaximize = function (e) {
    };
    
    this.__proto__.onmove = function (e) {
    };
    
    this.__proto__.onresize = function (e) {
    };
    
    this.__proto__.onenterfullscreen = function (e) {
    };
    
    this.__proto__.onleavefullscreen = function (e) {
    };
    
    this.__proto__.onzoom = function (e) {
    };
    
    this.__proto__.oncapturepagedone = function (e) {
    };
    
    this.__proto__.ondevtoolsopened = function (e) {
    };
    
    this.__proto__.ondevtoolsclosed = function (e) {
    };
    
    this.__proto__.onnewwinpolicy = function (frame, url, policy) {
    };

}

util.inherits(Window, EventEmitter);

module.exports = Window;
