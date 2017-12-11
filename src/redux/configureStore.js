import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {routerReducer} from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const finalCreateStore = compose(applyMiddleware(sagaMiddleware, ThunkMiddleware))(createStore)

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
})

const configureStore = function(initialState) {
  const store = finalCreateStore(reducer, initialState)
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
