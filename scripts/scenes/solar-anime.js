import * as THREE from 'three'

export default function () {

    var renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setClearColor( 0x000000 )

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set( 100, 5, 500 )

    window.planets.forEach((value, index) => {

        let texture = new THREE.TextureLoader().load(`./images/${value.name.toLowerCase()}_.jpg`)
        
        console.log( texture )

        let geometry = new THREE.SphereGeometry(value.radius, 100, 100)

        if (value.star) {

            var material = new THREE.MeshPhongMaterial({
                map: texture
            })

        } else {

            var material = new THREE.MeshLambertMaterial({
                map: texture
            })

        }

        let mesh = new THREE.Mesh(geometry, material)

        mesh.position.x = value.radius + 4 

        scene.add(mesh)

    })

    document.body.appendChild( renderer.domElement )

    var light = new THREE.AmbientLight(0x404040, 4)

    light.position.set(0, 0, 0)

    scene.add(light)

    return {
            scene: scene,
            camera: camera,
            renderer: renderer
        }

}