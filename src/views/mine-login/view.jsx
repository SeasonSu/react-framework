import React from 'react'
import {connect} from 'react-redux'
import 'antd-mobile'
import {NavBar, Icon, Button} from 'antd-mobile'
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

      <NavBar mode="light" icon={<Icon type = "left" />} onLeftClick={() => console.log('onLeftClick')} rightContent={[
          <Icon key="0" type="search" style={{
              marginRight: '16px'
            }}/>,
          <Icon key="1" type="ellipsis"/>
        ]}>NavBar</NavBar>
      <Button type="ghost" size="small" inline="inline">small</Button>
      Login</div>)
  }
}

export default View
