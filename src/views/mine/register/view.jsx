import React, {Component} from 'react'
import {connect} from 'react-redux'
import './view.scss'

@connect(state => {
  return {}
}, dispatch => {
  return {}
})
class View extends Component {
  render() {
    return (<div>Register</div>)
  }
}

export default View
