/**
 * Created by MIC on 2015/6/10.
 */

var App = require('./nwis_app.js');
var Clipboard = require('./nwis_clipboard.js');
var Shell = require('./nwis_shell.js');
var Screen = require('./nwis_screen.js');
var path = require('path');

var pkgpath = null;
// TODO: Fix the dynamic process of reading configuration file.
!pkgpath && (path.exists('../../package.json')) && (pkgpath = path.resolve(__dirname, '../..', 'package.json'));
!pkgpath && (path.exists('../package.json')) && (pkgpath = path.resolve(__dirname, '..', 'package.json'));

if (pkgpath) {
    var pkg = require(pkgpath);

    if (pkg && pkg['useStandardNW']) {
        module.exports = require("nw.gui");
    } else {
        module.exports.Window = require('./nwis_window.js');
        module.exports.MenuItem = require('./nwis_menuitem.js');
        module.exports.Menu = require('./nwis_menu.js');
        module.exports.App = new App();
        module.exports.Clipboard = new Clipboard();
        module.exports.Pasteboard = new Clipboard();
        module.exports.Tray = require('./nwis_tray.js');
        module.exports.Shell = new Shell();
        module.exports.Screen = new Screen();
    }
} else {
    module.exports = function() {};
}
