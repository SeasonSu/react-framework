import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import immutable, {Map} from 'immutable'
import Frame from '../layouts/Frame'
import * as views from '../views/**/*view.jsx'

let t = []
for (var key in views) {
  let value = views[key]
  t.push(<Route key={key} path={'/' + key} component={value}/>)
}

const routes = browserHistory => (
  <Router>
    <Switch>
      {t}
    </Switch>
  </Router>
)

export default routes
