import React from 'react'
import ReactDOM from 'react-dom'
import {syncHistoryWithStore} from 'react-router-redux'
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import routes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(<Provider store={store}>{routes(history)}</Provider>, document.getElementById('app'))