import React from 'react'
import {connect} from 'react-redux'
import {actions} from './MineLoginReducer'
import './MineLoginView.scss'

@connect(state => {
  return {articleList: state.mineLoginReducer.list.articleList}
}, dispatch => {
  return {}
})
class MineLoginView extends React.Component {
  render() {
    const {articleList} = this.props
    console.log(articleList);

    return (<div styleName='foo'>Login</div>)
  }
}

export default MineLoginView
