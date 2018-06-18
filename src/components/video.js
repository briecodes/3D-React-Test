import React from 'react';

class Video extends React.Component {
    render() {
        const video = <video src='stream' id="video" width="640" height="480" autoPlay></video>;
        video.id = 'videoId'
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //     // Not adding `{ audio: true }` since we only want video now
        //     navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        //         video.src = HTMLMediaElement.srcObject;
        //         video.play();
        //     });
        // }
        return (
            <div id='test'>
                {video}
                <button id="snap">Snap Photo</button>
                <canvas id="canvas" width="640" height="480"></canvas>
            </div>
        )
    }
};

export default Video;