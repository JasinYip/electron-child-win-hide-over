const Electron = require('electron')

const win = Electron.remote.getCurrentWindow()

win.hide()

setTimeout(() => win.show(), 2000)