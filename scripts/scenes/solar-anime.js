import * as THREE from 'three'
import Planets from '../statics/PLANETS'
import { inputSize, planetFixSize } from '../consts'



var scene = new THREE.Scene();



var camera = new THREE.OrthographicCamera(0, 100, 100, 100, 0, 100);
camera.position.z = 5


Planets.forEach( (value, index) => {

    let texture = new THREE.TextureLoader().load(`./../../images/${value.name.toLowerCase()}_.jpg`)

    let geometry = new THREE.SphereGeometry(planetFixSize, 1000, 1000)

    if ( value.star ) {

        var material = new THREE.MeshPhongMaterial({ map: texture })

    } else {

        var material = new THREE.MeshLambertMaterial({ map: texture })

    }

    let mesh = new THREE.Mesh( geometry, material )

    mesh.position.set( 5 * index + 2, 0, 0 )

    scene.add( mesh )

} )



var light = new THREE.RectAreaLight(0x000000, 1, 8, 3)

light.position.set(0,0,0)

scene.add(light)


export default { scene: scene,  camera: camera}