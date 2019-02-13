import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Preview from './Preview';
import Help from './Help';
import NotFound from './NotFound';
import HomePage from './components/HomePage';
import Page from './components/Page';

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" render={routeProps => <HomePage {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
