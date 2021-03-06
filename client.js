import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store.js'
import Layout from './components/Layout.jsx'
import Countries from './components/pages/Countries.jsx'
import Capitals from './components/pages/Capitals.jsx'

ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Countries}></IndexRoute>
      <Route path="/capitals" component={Capitals}></Route>
    </Route>
  </Router>
</Provider>,
document.getElementById('app'))
