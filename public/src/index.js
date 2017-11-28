//react stuff
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import App from './components/App';
import Navigation from './components/Navigation';
import Playlist from './components/Playlist';
import NotFound from './components/NotFound';

//stylesheets
import '../stylesheets/sitewide.less';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';


render((
  <BrowserRouter>
    <div className="page-root">
      <Navigation className="navbar-container" />

      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/playlist' component={Playlist}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('react-root'));
