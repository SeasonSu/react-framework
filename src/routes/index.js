import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Frame from '../layouts/Frame'
import MineLoginView from '../views/mine-login/MineLoginView'
import MineRegisterView from '../views/mine-register/MineRegisterView'

const routes = browserHistory => (<Router>
  <Switch>
    <Route path="/login" component={MineLoginView}/>
    <Route path="/register" component={MineRegisterView}/>
  </Switch>
</Router>)

export default routes
