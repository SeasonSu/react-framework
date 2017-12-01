import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Frame extends React.Component {
  render() {
    return (<MuiThemeProvider>
      {this.props.children}
    </MuiThemeProvider>)
  }
}

export default Frame
