import React from 'react'
import {connect} from 'react-redux'
import './MineLoginView.scss'

@connect(state => {
  console.log(state);
  return {}
}, dispatch => {
  return {}
})
class MineLoginView extends React.Component {
  render() {
    return (
      <div styleName='foo'>Login</div>
    )
  }
}

export default MineLoginView
