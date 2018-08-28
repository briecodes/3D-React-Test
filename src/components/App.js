import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 2;

scene.add( new THREE.AmbientLight( 0x443333, .75 ) );
let light1 = new THREE.DirectionalLight( 0xffddcc, .75 );
let light2 = new THREE.DirectionalLight( 0xccccff, .75 );
light1.position.set( 1, 0.75, 0.5 );
light2.position.set( -1, 0.75, -0.5 );
scene.add( light1 );
scene.add( light2 );

this.THREE = THREE;

let objLoader = new this.THREE.OBJLoader();
objLoader.setPath('./assets/3D/');
objLoader.load('General.obj', (object) => {
  object.position.y -= 2;
  scene.add(object);
});


// ADD pointerlock



const animate = function () {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
};
 
animate();

class App extends Component {
  render() {
    return (
      <div></div>
    );
  };
};

export default App;
