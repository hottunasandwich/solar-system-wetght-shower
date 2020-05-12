const { ipcRenderer } = require('electron')

export default function () {
    window.ipc = window.ipc || {}

    ipcRenderer.on('weight', function (event, message) {
        console.log(message)
    })
}