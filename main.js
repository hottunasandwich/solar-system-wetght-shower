const { app, BrowserWindow, ipcMain } = require('electron')
///////////////////////////////////////////////////////////////////////////////
async function createWindow() {
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
  
  const SerialPort = require('serialport')
  SerialPort.list().then((serial) => {
    if (serial.length === 0) {
      console.log('No serial found')
    } else {
      const ByteLength = require('@serialport/parser-byte-length')
      const port = new SerialPort(serial[0].path, {
        stopBits: 2,
        parity: 'even'
      })
      port.on('error', (err) => {
        if (err.disconnected === true) {
          console.log('Port Disconnected')
        } else {
          console.log(err)
        }
      })

      var i = 0
      const parser = port.pipe(new ByteLength({ length: 5 }))
      parser.on('data', (chunk) => {
        i++;
        if (i === 10) {
          var buffer = new Buffer(chunk)
          var data = buffer.toJSON().data
          var binaryweight = dec2bin(data[2]) + dec2bin(data[3]) + dec2bin(data[4])
          var weight = parseInt(binaryweight, 2)
          win.webContents.send('weight', weight)
          i = 0
        }
      })
    }
  }).catch((err) => {
    console.log(err)
  })

}

app.whenReady().then(createWindow)

// app.allowRendererProcessReuse = true

function dec2bin(dec) {
  return (dec >>> 0).toString(2).padStart(7, '0');
}