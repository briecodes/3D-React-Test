import React from 'react';
// import * as THREE from 'three';
// import React3 from 'react-three-renderer';
// import ObjectModel from 'react-three-renderer-objects';

// import roomModel from '../assets/room3.JD'

class RendererObjects extends React.Component {
  state = {
    scene: {}
  };

  componentDidMount() {
    const {scene} = this.refs;
    this.setState({scene});
  }

  render() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    return (
      <div>
        {/* <React3
          mainCamera = 'camera'
          width = {width}
          height = {height}
          alpha = {true}
        >
          <scene ref='scene'>
            <perspectiveCamera
              key = {'perspectiveCamera'}
              name = 'camera'
              fov = {75}
              aspect = {width / height}
              near = {0.1}
              far = {1000}
              position = {new THREE.Vector3(0, 0, 25)}
              lookAt = {new THREE.Vector3(0, 0, 0)}
            />
            <group name='roomGroup'>
              <ObjectModel
                name = 'room'
                model = {roomModel}
                scene = {this.state.scene}
                group = 'roomGroup'
              />
            </group>
          </scene>
        </React3> */}
      </div>
    );
  };
};

export default RendererObjects;