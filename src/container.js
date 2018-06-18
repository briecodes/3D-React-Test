import React, { Component } from 'react';

import Video from './components/video';

export default class Container extends Component {
    
    render() {
        return (
            <div>
                Container Component <br/>
                <Video />
            </div>
        )
    };
};