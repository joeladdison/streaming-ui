import React from 'react';
import YouTube from 'react-youtube';

class LiveStream extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        videoId: props.videoId,
        fullsize: props.fullsize
      };
    }

    render() {
      const { videoId } = this.state;

      const opts = {
        height: '100%',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

      return (
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this._onReady}
        />
      );
    }

    _onReady(event) {
      // access to player in all event handlers via event.target
      //event.target.pauseVideo();
    }
  }

export default LiveStream;
