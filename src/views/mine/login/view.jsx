import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../../components/NavBar/NavBar'
import './view.scss'
import logo from '../../../assets/images/logo.png'
import {actions} from './reducer'
import {action1} from './actions.async'

@connect(state => {
  return {b: state.mineLogin.list, counter: state.mineLogin.counter}
}, dispatch => {
  return {
    // loadArticles: actions.loadArticles,
    action1: function() {
      dispatch({type: 'INCREMENT_ASYNC'})
    }
  }
})
class View extends Component {
  render() {
    const {action1} = this.props

    // this.props.loadArticles()
    // this.props.action1()
    console.log(this.props.counter);

    return (<div className='gfoo'>
      <NavBar title='登录'/>
      <img styleName='logo' src={logo} onClick={() => action1()}/>
    </div>)
  }
}

export default View
