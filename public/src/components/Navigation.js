/*
created by: karina
created date: 11/27/17
*/

import React from 'react';
import { Navbar,
  Nav,
  NavItem,}
  from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (

  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          Karina Yeznaian for Berns Inc
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>

        <NavItem eventKey={1} href="/playlist">Playlist</NavItem>

        <NavItem eventKey={2} href="http://linkedin.com/in/karinayeznaian">LinkedIn</NavItem>

        <NavItem eventKey={3} href="http://github.com/karina-y">Github</NavItem>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
