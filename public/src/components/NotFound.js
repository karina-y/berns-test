/*
created by: karina
created date: 11/28/17
*/

import React from 'react';
import {Col, Grid, Row} from "react-bootstrap";


const NotFound = () => (
    <div className="NotFound">
        <Grid>
            <Row>
                <Col sm={12}>
                    <h1>Woops! Not found!</h1>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default NotFound;
