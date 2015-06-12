
var __clipboard = new Clipboard();

// Almost singleton.
function Clipboard() {
    
    this.get = function() {
        return __clipboard;
    }

    this.__proto__.set = function(data, type) {
    };
    
    this.__proto__.get = function (type) {
    };

    this.__proto__.clear = function() {
    };

}

module.exports = Clipboard;