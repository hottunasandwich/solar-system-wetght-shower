import * as THREE from 'three'
import { inputSize, planetFixSize } from './consts'
import planets from './statics/Planets';



function init () {

    var scene = new THREE.Scene();



    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0, 100 )
    camera.position.z = 5

    var helper = new THREE.CameraHelper( camera );
    scene.add( helper )

    planets.forEach( (value, index) => {

        var texture = new THREE.TextureLoader().load(`./../images/${value.name.toLowerCase()}_.jpg`)

        var geometry = new THREE.SphereGeometry( planetFixSize, 100, 100 )

        if ( value.star ) {

            var material = new THREE.MeshPhongMaterial({ map: texture })

        } else {

            var material = new THREE.MeshLambertMaterial({ map: texture })

        }

        var mesh = new THREE.Mesh( geometry, material )

        mesh.position.set( index * 5 , parseInt( index / 5 ) * 5, 0 )

        scene.add( mesh )

        console.log('added')
    } )



    var light = new THREE.PointLight( 0xFFFFFF, 10, 100 )

    light.position.copy( camera.position )

    scene.add(light)



    // create renderer
    var renderer = new THREE.WebGLRenderer({anitalias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor( 0xFFFFFF );

    document.body.appendChild(renderer.domElement);

}


function render() {

    requestAnimationFrame(render);

    renderer.render(scene, camera);

}


init()
render()


document.addEventListener( 'keypress', function ( event ) {

    event.preventDefault()

    console.log(event.keyCode)

    switch ( event.keyCode ) {

        case 199:

            camera.position.set( 0, 1, 0 )

            break;
        
        case 97:

            camera.position.set( -1, 0, 0 )

            break;
        
        case 115:

            camera.position.set( 0, -1, 0 )

            break;

        case 100:

            camera.position.set( 1, 0, 0)
            break;
        default:
            break;
    }

} )