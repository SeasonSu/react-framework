import React from 'react'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import {actions} from './MineLoginReducer'
import styles from './MineLoginView.scss'

@connect(state => {
  return {}
}, dispatch => {
  return {}
})
@CSSModules(styles)
class MineLoginView extends React.Component {
  render() {
    return (<div styleName='foo'>Login</div>)
  }
}

export default MineLoginView
