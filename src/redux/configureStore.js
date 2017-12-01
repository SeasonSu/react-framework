import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {routerReducer} from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const finalCreateStore = compose(applyMiddleware(ThunkMiddleware))(createStore)

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
})

const configureStore = function(initialState) {
  const store = finalCreateStore(reducer, initialState)
  return store
}

export default configureStore
