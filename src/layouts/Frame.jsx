import React from 'react'

class Frame extends React.Component {
  render() {
    return (<div className="frame">
      <div className="header"></div>
      <div className="container">
        {this.props.children}
      </div>
    </div>)
  }
}

export default Frame
