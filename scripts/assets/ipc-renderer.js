const { ipcRenderer } = require('electron')

export default function () {
    window.ipc = window.ipc || {}

    var standbyCounter = 0

    ipcRenderer.on('weight', function (event, message) {

        console.log(message)
        
        standby( message )
        update( message )
    })

    function standby (data) {

        if ( data * 0.001 <= 3 ) {

            standbyCounter ++ 

        } else if ( data * 0.001 > 3 ) {

            standbyCounter = 0

            window.standby = false

        }


        if ( standbyCounter >= 200 ) {

            window.standby = true

        }

    }

    function update (w) {

        window.planets.forEach(( planet ) => {

            var dom = document.querySelector(`#${planet.name.toLowerCase()} > div > span.weight`)
            dom.innerHTML = (w * planet.scale * 0.001).toFixed(3)

        })
        
    }
}