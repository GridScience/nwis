# NWIS

## Overview

nwis is a project intended to provide IntelliSense support for nw.js GUI API (nw.gui), especially under Microsoft Visual Studio or JetBrains WebStorm.

[nw.js](https://github.com/mwjs/nw.js/) is an amazing tool. However, with only binary form available in development, it is inconvenient to write down the right members in IDEs.

All information is based on the [official API document](https://github.com/nwjs/nw.js/wiki/Native-UI-API-Manual). Current version of nwis is compatible with nw.js v0.12.2. The functions and members are dummies (placeholders), only providing IntelliSense support. Remember to switch to nw.gui when the app is prepared for running.

## Using the Code

In developing:

```
var gui = require('./nwis/nwisgui.js'); // Use nwis for IntelliSense support.
```

In debugging/publishing:

```
var gui = require('nw.gui'); // Use nw.gui, which can be recognized by nw.js.
```

## Future Improvements

Impelementing auto switching between nwis and nw.gui.
