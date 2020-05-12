////////////////////////////////////////////////////////////////////////////////
import * as THREE from 'three'
import { inputSize, planetFixSize } from './consts'
import planets from './statics/PLANETS';

import ipcRenderer from './assets/ipc-renderer'
////////////////////////////////////////////////////////////////////////////////
var renderlist = []

function init() {

    ipcRenderer()

    planets.forEach((value) => {

        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100)
        camera.position.z = 1.7

        var texture = new THREE.TextureLoader().load(`./images/${value.name.toLowerCase()}_.jpg`)

        var geometry = new THREE.SphereGeometry( value.radius, 100, 100)

        var material = new THREE.MeshLambertMaterial({ map: texture })

        var mesh = new THREE.Mesh( geometry , material )
        scene.add( mesh )

        if ( value.ring ) {

            var ringGeometry = new THREE.RingGeometry( value.radius + 0.01, value.radius + 0.2, 100, 100);
            var ringTexture = new THREE.TextureLoader().load(`./images/${value.name.toLowerCase()}-ring_.png`)
            var ringMaterial = new THREE.MeshBasicMaterial({ map: ringTexture, side: THREE.DoubleSide });
            var plane = new THREE.Mesh(ringGeometry, ringMaterial);

            plane.rotation.x = - ( Math.PI / 3 )
            plane.position.y = 0.2
            plane.position.z = 0.25

            scene.add(plane);
        }

        var light = new THREE.AmbientLight(0x404040, 4); // soft white light
        light.position.z = 5
        scene.add(light);

        var renderer = new THREE.WebGLRenderer({ anitalias: true, alpha: true });

        renderer.setSize(( window.innerWidth / 9 ) * value.box.width, ( window.innerWidth / 9 ) * value.box.width );
        renderer.setClearColor(0x000000, 0);

        console.log(value.name)

        var box = document.querySelector(`#${value.name.toLowerCase()}`)
        console.log(box)
        box.appendChild(renderer.domElement)
        
        var node = document.createElement('div')

        node.innerHTML = value.persianName
        node.setAttribute('class', 'name')

        box.appendChild(node)


        renderlist.push({
            renderer: renderer,
            scene: scene,
            camera: camera,
            mesh: mesh,
            planet: value
        })

    })
    // create renderer
}


function render() {
    requestAnimationFrame(render);
    renderlist.forEach((value) => {
        value.renderer.render(value.scene, value.camera)
        value.mesh.rotation.y = value.mesh.rotation.y + value.planet.speed * 0.00001
    })
}


init()
render()