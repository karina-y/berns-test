/*
created by: karina
created date: 11/27/17
*/


import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import '../../stylesheets/VideoThumbnail.less';

class VideoThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bootstrapColClasses: props.bootstrapColClasses,
      video: props.video,
      selectedVideoUrl: props.selectedVideoUrl,
      setActiveVideo: props.setActiveVideo
    };

    this.setActiveElement = this.setActiveElement.bind(this);
  }

  //need to check for changes in selectedVideoUrl
  componentWillReceiveProps(nextProps) {

    const selectedVideoUrl = nextProps.selectedVideoUrl;
    const video = this.props.video;

    //if we didn't find a match, un-highlight the element
    if (!selectedVideoUrl || video.url !== selectedVideoUrl) {
      this.setState({
        activeUrl: null
      })
    }
  }

  setActiveElement(video) {

    if (this.state.activeUrl === video.url) {
      this.setState({
        activeUrl: null
      });

      //sending nothing so we can display the film strip again
      this.state.setActiveVideo();
    }

    else {
      this.setState({
        activeUrl: video.url
      });

      this.state.setActiveVideo(video);
    }
  }


  render() {
    const video = this.props.video;

    const bootstrapColClasses = this.props.bootstrapColClasses != null ? this.props.bootstrapColClasses : "";

    const outerClassName = this.state.activeUrl === video.url ? "video-thumbnail vertical-center active" : "video-thumbnail vertical-center";

    return (
      <div className={bootstrapColClasses}>
        <div className={outerClassName} onClick={() => this.setActiveElement(video)}>
          <Image src={video.image} width={100} />
        </div>
      </div>
    )
  }
}

VideoThumbnail.propTypes = {
  bootstrapColClasses: PropTypes.string,
  video: PropTypes.object.isRequired,
  selectedVideoUrl: PropTypes.string,
  setActiveVideo: PropTypes.func.isRequired
};

export default VideoThumbnail;




