import React from 'react'
import {connect} from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import './view.scss'
import logo from '../../../assets/images/logo.png'

@connect(state => {
  return {}
}, dispatch => {
  return {}
})
class View extends React.Component {
  render() {
    return (<div className='gfoo'>
      <NavBar title='登录'/>
      <img styleName='logo' src={logo}/>
    </div>)
  }
}

export default View
