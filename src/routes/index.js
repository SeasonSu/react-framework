import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import * as views from '../views/**/*view.jsx'

let arr = []
for (var key in views) {
  arr.push(<Route key={key} path={'/' + key} component={views[key]}/>)
}

const routes = browserHistory => (
  <Router>
    <Switch>
      {arr}
    </Switch>
  </Router>
)

export default routes
