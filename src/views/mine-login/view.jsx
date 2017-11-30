import React from 'react'
import {connect} from 'react-redux'
import './view.scss'

@connect(state => {
  console.log(state);
  return {}
}, dispatch => {
  return {}
})
class View extends React.Component {
  render() {
    return (
      <div styleName='foo'>Login</div>
    )
  }
}

export default View
