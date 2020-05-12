const { app, BrowserWindow, ipcMain } = require('electron')
const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('COM3', {
  stopBits: 2,
  parity: 'even'
})

var i = 0 
///////////////////////////////////////////////////////////////////////////////
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    // alwaysOnTop: process.env === 'development'? false : true,
    webPreferences: {
      nodeIntegration: true,
    },
    fullscreen: true
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
  
  win.on('ready-to-show', () => {
    const parser = port.pipe(new ByteLength({ length: 5 }))
    parser.on('data', (chunk) => {
      i++;
      if (i === 10) {
        console.log(chunk)
        var buffer = new Buffer(chunk)
        var data = buffer.toJSON().data
        var binaryweight = dec2bin(data[2]) + dec2bin(data[3]) + dec2bin(data[4])
        var weight = parseInt(binaryweight, 2)
        win.webContents.send('weight', weight)
        i = 0
      }
    })

  })
}

app.whenReady().then(createWindow)

function dec2bin(dec) {
  return (dec >>> 0).toString(2).padStart(7, '0');
}