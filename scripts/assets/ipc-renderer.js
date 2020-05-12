const { ipcRenderer } = require('electron')

export default function () {
    window.ipc = window.ipc || {}
    
    ipcRenderer.on('weight', function (event, message) {
        console.log(message)
        update(message)
    })

    console.log(planets)

    function update (w) {

        window.planets.forEach(( planet ) => {

            var dom = document.querySelector(`#${planet.name.toLowerCase()} > div > span.weight`)
            dom.innerHTML = (w * planet.scale * 0.001).toFixed(3)

        })
        
    }
}