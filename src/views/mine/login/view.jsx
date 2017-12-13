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

    return (<div className="m-login">
      <div className="m-login-main">
        <div className="m-login-main-left"></div>
        <div className="m-login-main-right">
          <div className="m-login-logo"></div>
          <div className="m-login-welcome">
            欢迎您，请登录!
          </div>
          <Form ref="form" formClassName="m-login-form">
            <Form.Item label="" name="account" validateRules={[validationRules.require()]}>
              <Input onKeyUp={this.handlekeyUp.bind(this)} className="m-login-input accounts" placeholder="请输入登录帐号"/>
            </Form.Item>

            <Form.Item label="" name="password" validateRules={[validationRules.require()]}>
              <Input onKeyUp={this.handlekeyUp.bind(this)} type="password" className="m-login-input password" placeholder="请输入登录密码"/>
            </Form.Item>
          </Form>
          <a className="m-login-loginbtn" onClick={this.handleLogin.bind(this)}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</a>
        </div>
      </div>
    </div>)
  }
}

export default View
