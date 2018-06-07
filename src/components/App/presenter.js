import React from 'react';
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';
// import styles  from './styles.scss';
import Login from 'components/Login';
import Header from 'components/Header';

const App = props => [
  //nav
  //routes
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />
  // <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};


const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "feed"} />
    <Route exact path="/explore" render={() => "explore"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/header" component={Header} />
  </Switch>
);
export default App;
