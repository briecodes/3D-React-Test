import React from 'react';
import Webcam from 'react-webcam';

class Video extends React.Component {
    render() {
        // var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);

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
                <Webcam audio={false} height={350}/>
                {/* <video id="myVideo" width="400" height="300" preload='true' autoPlay loop muted></video> */}
                <button id="snap">Snap Photo</button>
                <canvas id="canvas" width="640" height="480"></canvas>
            </div>
        )
    }
};

export default Video;