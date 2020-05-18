import * as THREE from 'three'

var renderlist = []

export default function () {

    window.planets.forEach((value) => {

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

        var box = document.querySelector(`#${value.name.toLowerCase()}`)

        box.appendChild(renderer.domElement)
        
        var node = document.createElement('div')
        var w = document.createElement('span')
        var n = document.createElement('span')

        w.setAttribute('class', 'weight')
        n.setAttribute('class', 'name')

        node.setAttribute('class', 'container')

        node.appendChild(n)
        node.appendChild(w)

        n.innerHTML = value.persianName

        box.appendChild(node)


        renderlist.push({
            renderer: renderer,
            scene: scene,
            camera: camera,
            mesh: mesh,
            planet: value
        })

    })

    return renderlist
    // create renderer
}
