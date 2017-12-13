import React, {Component} from 'react'
import {connect} from 'react-redux'
import './view.scss'
import logo from '../../../assets/images/logo.png'
import {actions} from './reducer'
import {action1} from './actions.async'
// import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../../../../reducers/login/actions.names'
// import {createForm} from 'rc-form'

@connect(state => {
  return {b: state.mineLogin.list, counter: state.mineLogin.counter, cc: state.login.login}
}, dispatch => {
  return {
    // loadArticles: actions.loadArticles,
    action1: function() {
      dispatch({type: 'LOGIN'})
      // dispatch({type: 'INCREMENT_ASYNC'})
    }
  }
})
class View extends Component {
  render() {
    const {action1} = this.props

    console.log(this.props.cc);

    return (<div className='gfoo'></div>)
  }
}

export default View
