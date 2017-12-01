import React from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'antd-mobile'

class Frame extends React.Component {
  render() {
    return (<div>
      {this.props.children}
    </div>)
  }
}

export default Frame
