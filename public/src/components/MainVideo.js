/*
created by: karina
created date: 11/27/17
*/


import React from 'react';
import Clappr from 'clappr';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import '../../stylesheets/MainVideo.less';

class MainVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderVisible: "",
      videoUrl: props.videoUrl,
      width: props.width,
      height: props.height
    };

    this.instantiateClappr = this.instantiateClappr.bind(this);
  }

  componentDidMount() {
    const videoUrl = this.props.videoUrl;
    const width = this.props.width;
    const height = this.props.height;

    if (videoUrl) {
      this.instantiateClappr(videoUrl, width, height);
    }

  }

  componentWillReceiveProps(nextProps) {
    const videoUrl = nextProps.videoUrl;
    const width = nextProps.width;
    const height = nextProps.height;

    //if we've already got a video, destroy it, otherwise it'll just add the new one below the existing one in the dom
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }

    if (videoUrl) {
      this.instantiateClappr(videoUrl, width, height);
    }
    //if the client clicked the same thumbnail it's now deselected and we're back to the film strip placeholder
    else {
      this.setState({
        placeholderVisible: ""
      });
    }
  }

  instantiateClappr(videoUrl, width, height) {
    const brandOrange = "#ff8900";

    this.player = new Clappr.Player({
      parent: this.refs.mainVideo,
      source: videoUrl,
      width: width,
      height: height,
      autoPlay: true,
      mediacontrol: {seekbar: brandOrange, buttons: brandOrange}
    });

    //autoplay option wouldn't work so i'm using this as well
    this.player.play();

    this.setState({
      placeholderVisible: "hidden"
    });
  }

  render() {
    return (
      <div ref="mainVideo" className="main-video">
        <FontAwesome name="film" className={this.state.placeholderVisible} />
      </div>
    )
  }
}

MainVideo.propTypes = {
  videoUrl: PropTypes.string,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default MainVideo;