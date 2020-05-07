import * as THREE from 'three'
import { inputSize, planetFixSize } from './consts'
import planets from './statics/Planets';

var renderlist = []

function init() {

    planets.forEach((value) => {
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100)
        camera.position.z = 2

        var texture = new THREE.TextureLoader().load(`./images/${value.name.toLowerCase()}_.jpg`)

        var geometry = new THREE.SphereGeometry(planetFixSize, 100, 100)

        var material = new THREE.MeshLambertMaterial({ map: texture })

        var mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        var light = new THREE.AmbientLight(0x404040, 4); // soft white light
        light.position.z = 5
        scene.add(light);

        var renderer = new THREE.WebGLRenderer({ anitalias: true });

        renderer.setSize(window.innerWidth / 5, window.innerWidth / 5);
        renderer.setClearColor(0x000000);
        document.body.appendChild(renderer.domElement);

        renderlist.push({
            renderer: renderer,
            scene: scene,
            camera: camera,
            mesh: mesh,
            star: value.star
        })

    })
    // create renderer
}


function render() {
    requestAnimationFrame(render);
    renderlist.forEach((value) => {
        value.renderer.render(value.scene, value.camera)
        if (value.star === false || value.star === undefined) {
            value.mesh.rotation.y += 0.02
        }
    })
}


init()
render()