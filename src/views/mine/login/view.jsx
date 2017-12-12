import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar/NavBar'
import './view.scss'
import logo from '../../../assets/images/logo.png'
import {actions} from './reducer'
import {action1} from './actions.async'
// import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../../../../reducers/login/actions.names'
import {List, InputItem, WhiteSpace, Button} from 'antd-mobile'
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

    return (<div className='gfoo'>
      <NavBar title='登录'/>
      <img styleName='logo' src={logo} onClick={() => action1()}/>
      <InputItem clear="clear" placeholder="请输入手机号"></InputItem>
      <img src={logo} width="100" height="64"/>
      <InputItem clear="clear" placeholder="请输入图片验证码"></InputItem>
      <InputItem clear="clear" placeholder="请输入6位短信验证码"></InputItem>
      <Button type="primary">获取验证码</Button>
      <Button type="primary">确认</Button>
    </div>)
  }
}

export default View
