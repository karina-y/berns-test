/*
created by: karina
created date: 11/27/17
*/

import React from 'react';
import Alert from 'react-s-alert';
import FontAwesome from 'react-fontawesome';
import {Col, Grid, Row} from "react-bootstrap";
import VideoThumbnail from "./VideoThumbnail";
import '../../stylesheets/Playlist.less';
import MainVideo from './MainVideo'


class Playlist extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
      loading: true,
      selectedVideoUrl: null,
      isMainVideoViewActive: "inactive",
      isPlaylistSelectionViewActive: "active"
    };

    this.setActiveVideo = this.setActiveVideo.bind(this);
    this.togglePanels = this.togglePanels.bind(this);
  }

  //grab the data and set my state
  async componentDidMount() {

    const data = await Playlist.getData();

    if (data != null) {
      this.setState({
        data: data,
        loading: false
      });
    }
    else {
      //throw error to client saying we have no videos
      Alert.warning("Uh oh! We don't have any videos to show you, please check back later.", {
        position: 'top',
        effect: 'stackslide',
        beep: false,
        timeout: 3000,
      });
    }
  }

  static async getData() {
    return {
      videos: [
        {
          url: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
          image: 'https://www.svgrepo.com/show/12898/camcorder.svg'
        },
        {
          url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          image: 'https://www.svgrepo.com/show/27346/camcorder.svg'
        },
        {
          url: 'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8',
          image: 'https://www.svgrepo.com/show/69071/camcorder.svg'
        },
        {
          url: 'http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8',
          image: 'https://www.svgrepo.com/show/138418/camcorder.svg'
        },
        {
          url: 'http://www.streambox.fr/playlists/test_001/stream.m3u8',
          image: 'http://www.iconninja.com/files/628/326/573/camcorder-icon.svg'
        }
      ]
    };
  }

  setActiveVideo(video) {
    this.setState({
      selectedVideoUrl: video != null ? video.url : null,
      isMainVideoViewActive: "active",
      isPlaylistSelectionViewActive: "inactive"
    });
  }

  togglePanels() {

    if (this.state.isMainVideoViewActive === "active") {
      this.setState({
        isMainVideoViewActive: "inactive",
        isPlaylistSelectionViewActive: "active"
      });
    }
    else {
      this.setState({
        isMainVideoViewActive: "active",
        isPlaylistSelectionViewActive: "inactive"
      });
    }

  }


  render() {
    const setActiveVideo = this.setActiveVideo;

    let data = this.state.data;
    const selectedVideoUrl = this.state.selectedVideoUrl;

    return (
      <div className="playlist">

        <Alert stack={{limit: 3}} />

        {
          !this.state.loading
            ?
            <Grid>

              {/* go back option for mobile */}
              <Row className="hidden-md hidden-lg">
                <Col sm={12} className="shadow-panel-title">

                  <h3>
                    <FontAwesome name="chevron-left" className="go-back" onClick={() => this.togglePanels()} />

                    {
                      this.state.isPlaylistSelectionViewActive === "active"
                        ?
                        'Back To Video'
                        :
                        'Back To Playlist'
                    }
                  </h3>

                </Col>
              </Row>

              {/* video | thumbnails */}
              <Row className="dual-panel-container custom-scrollbar">

                {/* video */}
                <Col md={6} className={this.state.isMainVideoViewActive + " mobile-view left-panel"}>
                  <div className="video-container">

                    <MainVideo videoUrl={selectedVideoUrl} height='auto !important' width='100% !important' />

                  </div>
                </Col>

                {/* thumbnails */}
                <Col md={6} className={this.state.isPlaylistSelectionViewActive + " mobile-view right-panel"}>

                  <Grid fluid className="playlist-panel">

                    <Row className="video-thumbnails">
                      {
                        data.videos.map(function (video, index) {
                          return <VideoThumbnail video={video}
                                                 bootstrapColClasses="col-sm-6 col-xs-6"
                                                 key={index}
                                                 selectedVideoUrl={selectedVideoUrl}
                                                 setActiveVideo={setActiveVideo} />;
                        })
                      }
                    </Row>
                  </Grid>

                </Col>
              </Row>
            </Grid>
            :
            <Grid>
              <Row>
                <Col sm={12}>
                  <h1 className="text-center">Loading...</h1>
                </Col>
              </Row>
            </Grid>
        }

      </div>


    )
  }
}



export default Playlist;
