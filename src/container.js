import React, { Component } from 'react';

// import Video from './components/video';
import ThreeDeeTest from './components/3dtest';

export default class Container extends Component {
    
    render() {
        return (
            <div>
                Container Component <br/>
                {/* <Video /> */}
                <ThreeDeeTest />
            </div>
        )
    };
};