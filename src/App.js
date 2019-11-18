import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { HomePage, NotFound, Page, Preview } from './pages';
import { apiEndpoint } from './prismic-configuration';

const App = () => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/preview' component={Preview} />
          <Route exact path='/:uid' component={Page} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
