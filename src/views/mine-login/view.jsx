import React from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar/NavBar'
import './view.scss'

@connect(state => {
  return {}
}, dispatch => {
  return {}
})
class View extends React.Component {
  render() {
    return (<div className='gfoo' styleName='foo'>
      <NavBar title='登录'/>
      Login</div>)
  }
}

export default View
