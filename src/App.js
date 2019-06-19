import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { HomePage, NotFound, Page } from './pages'
import Preview from './Preview'

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/preview' component={Preview} />
      <Route exact path='/:uid' component={Page} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
