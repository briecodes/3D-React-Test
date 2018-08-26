import React from 'react';
const THREE = require('three');
import { THREE.JDLoader } from '../JDLoader.min.js';

class ThreeDeeTest extends React.Component {

  componentDidMount() {
    let div = document.getElementById('mainDiv');

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    div.append(this.renderer.domElement);

    this.scene.add(this.cube);

    this.cube.rotation.x = 10;
    this.cube.rotation.y = 5;
    this.cube.position.z = -5;

    this.animate();
  };

  renderer = new THREE.WebGLRenderer({antialias: true});
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
  geometry = new THREE.BoxGeometry(1,1,1);
  material = new THREE.MeshBasicMaterial({color: 0xff0000});
  cube = new THREE.Mesh(this.geometry, this.material);

  animate = () => {
    this.cube.rotation.x += 0.01;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  render() {

    return (
      <div id='mainDiv'></div>
    );
  };
};

export default ThreeDeeTest