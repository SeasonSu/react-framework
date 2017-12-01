import React from 'react'
import {connect} from 'react-redux'
import {AppBar} from 'material-ui'
import './view.scss'

@connect(state => {
  console.log(state);
  return {}
}, dispatch => {
  return {}
})
class View extends React.Component {
  render() {
    return (<div className='gfoo' styleName='foo'>
      <AppBar title="Title"/>
      Login</div>)
  }
}

export default View
