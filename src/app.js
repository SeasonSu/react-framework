import React from 'react'
import ReactDOM from 'react-dom'
import {syncHistoryWithStore} from 'react-router-redux'
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import routes from './routes'
import Frame from './layouts/Frame'

const store = configureStore()
const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(<Provider store={store}>
  <Frame>
    {routes(history)}
  </Frame>
</Provider>, document.getElementById('app'))