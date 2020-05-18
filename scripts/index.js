import planets from './statics/PLANETS';
import weightShower from './scenes/weight-shower'

import $ from 'jquery'

window.planets = planets

var w = weightShower()

window.standby = true


var video = document.querySelector('video')

var j = true

async function render() {
    requestAnimationFrame(render);

    if (window.standby) {

        if (j) {

            $('div').toggleClass( 'hide' )

            video.play()

            j = false

        }

        video.setAttribute( 'class', '' )

    } else {

        if (!j) {

            video.pause()
            
            $('div').toggleClass( 'hide' )

            j = true
        }

        video.setAttribute( 'class', 'hide' )
        w.forEach((value) => {
            value.renderer.render(value.scene, value.camera)
            value.mesh.rotation.y = value.mesh.rotation.y + value.planet.speed * 0.00001
        })

    }

}

render()