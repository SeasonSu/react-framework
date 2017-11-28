import React from 'react'
import {connect} from 'react-redux'
import {actions} from './MineLoginReducer'

@connect(state => {
  return {}
}, dispatch => {
  return {}
})
class MineLoginView extends React.Component {
  render() {
    return (<div>Login</div>)
  }
}

export default MineLoginView
