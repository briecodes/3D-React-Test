import React from 'react';
// import Webcam from 'react-webcam';
let THREE = require('three');

class Video extends React.Component {
    render() {
    let camera, scene, renderer;
    let geometry, material, mesh;
 
    init();
    animate();
    
    function init() {
    
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;
    
        scene = new THREE.Scene();
    
        geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        material = new THREE.MeshNormalMaterial();
    
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
    
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    
    }
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}
        // let colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);

        // colors.on('track', function(event) {
        //     if (event.data.length === 0) {
        //     // No colors were detected in this frame.
        //     } else {
        //     event.data.forEach(function(rect) {
        //         console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
        //     });
        //     }
        // });
        // tracking.track('#myVideo', colors);

        return (
            <div id='test'>
                {/* <Webcam audio={false} height={350}/> */}
                {/* <video id="myVideo" width="400" height="300" preload='true' autoPlay loop muted></video> */}
                <button id="snap">Snap Photo</button>
                <canvas id="canvas" width="640" height="480"></canvas>
            </div>
        )
    }
};

export default Video;