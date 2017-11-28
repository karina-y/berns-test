import React, { Component } from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../../stylesheets/App.less';

class App extends Component {
    render() {
        return (
            <div className="App">

              <Grid>
                <Row>
                  <Col sm={12}>
                    <h1>Clappr test for Karina Yeznaian</h1>
                    <p><a href="/playlist">Playlist</a></p>
                    <p><a href="http://linkedin.com/in/karinayeznaian">LinkedIn</a></p>
                    <p><a href="http://github.com/karina-y">Github</a></p>
                  </Col>
                </Row>
              </Grid>

            </div>
        );
    }
}

export default App;
