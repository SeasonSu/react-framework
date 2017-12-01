import React, {Component} from 'react'
import {goBack} from 'react-router-redux'
import './header.scss'

class Header extends Component {
  onBack() {
    const {onBack} = this.props

    if (onBack) {
      onBack()
    } else {
      goBack()
    }
  }

  renderLeft() {
    const {left} = this.props

    if (left) {
      return left
    } else if (left === false) {
      return ''
    }

    return (<div className="top-menu-go-back panel-table-cell">
      <a href="javascript:void(0)" onClick={this.onBack.bind(this)} className="icon top-menu-icon-go-back"/>
    </div>)
  }

  renderRight() {
    const {right} = this.props

    if (right) {
      return right
    } else if (right === false) {
      return <div className="panel-table-cell" style={{
          width: '32px'
        }}></div>
    }

    return (<div className="top-menu-go-home panel-table-cell">
      <a href="#/" className="icon top-menu-icon-home"/>
    </div>)
  }

  render() {
    const {title} = this.props

    return (<div className="top-menu panel-table">
      {this.renderLeft()}
      <div className="top-menu-title panel-table-cell">
        {title}
      </div>
      {this.renderRight()}
    </div>)
  }
}

export default Header
