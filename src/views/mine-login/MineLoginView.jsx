import React from 'react'
import {connect} from 'react-redux'
import {actions} from './MineLoginReducer'
import './MineLoginView.scss'

@connect(state => {
  console.log(state);
  return {articleList: state.mineLogin.list.articleList}
}, dispatch => {
  return {}
})
class MineLoginView extends React.Component {
  render() {
    const {articleList} = this.props

    return (
      <div styleName='foo'>Login</div>
    )
  }
}

export default MineLoginView
