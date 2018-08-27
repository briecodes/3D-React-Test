import React, { Component } from 'react';

// import Video from './components/video';
import ThreeDeeTest from './components/3dtest';
import RendererObjects from './components/RendererObjects';

export default class Container extends Component {
    
    render() {
        return (
            <div>
                {/* <Video /> */}
                <ThreeDeeTest />
                {/* <RendererObjects /> */}
            </div>
        )
    };
};